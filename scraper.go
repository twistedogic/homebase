package main

import (
	"fmt"
	"log"
	"net/url"

	"github.com/playwright-community/playwright-go"
)

type Response struct {
	Target        *url.URL
	Method        string
	Payload, Body []byte
}

func FromResponse(res playwright.Response, r *Response) error {
	req := res.Request()
	if rt := req.ResourceType(); rt != "other" && rt != "xhr" {
		return nil
	}
	var err error
	r.Target, err = url.Parse(req.URL())
	if err != nil {
		return err
	}
	r.Method = req.Method()
	if r.Method == "POST" {
		r.Payload, err = req.PostDataBuffer()
		if err != nil {
			return err
		}
	}
	r.Body, err = res.Body()
	if err != nil {
		return err
	}
	return nil
}

func (r Response) IsEmpty() bool { return r.Target == nil }

func (r Response) String() string {
	return fmt.Sprintf(">> %s %s %s %s", r.Method, r.Target, r.Payload, r.Body)
}

type Scraper struct {
	pw      *playwright.Playwright
	browser playwright.Browser
}

func NewScraper() (Scraper, error) {
	s := Scraper{}
	if err := playwright.Install(); err != nil {
		return s, err
	}
	pw, err := playwright.Run()
	if err != nil {
		return s, err
	}
	s.pw = pw
	browser, err := pw.Chromium.Launch()
	if err != nil {
		return s, err
	}
	s.browser = browser
	return s, err
}

func (s Scraper) Run(target string) error {
	page, err := s.browser.NewPage()
	if err != nil {
		return err
	}
	page.On("response", func(res playwright.Response) {
		var r Response
		if err := FromResponse(res, &r); err != nil {
			log.Println(err)
			return
		}
		if !r.IsEmpty() {
			fmt.Println(r)
		}
	})
	opt := playwright.PageGotoOptions{
		WaitUntil: playwright.WaitUntilStateNetworkidle,
	}
	if _, err := page.Goto(target, opt); err != nil {
		return err
	}
	return page.Close()
}

func (s Scraper) Close() error {
	if err := s.browser.Close(); err != nil {
		return err
	}
	if s.pw != nil {
		return s.pw.Stop()
	}
	return nil
}
