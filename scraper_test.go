package main

import "testing"

func Test_Scraper(t *testing.T) {
	cases := []string{
		"https://www.midland.com.hk/en/list/rent",
		"https://hk.centanet.com/findproperty/en/list/rent",
		"https://www.28hse.com/en/rent",
	}
	for i := range cases {
		tc := cases[i]
		t.Run(tc, func(t *testing.T) {
			s, err := NewScraper()
			if err != nil {
				t.Fatal(err)
			}
			if err := s.Run(tc); err != nil {
				t.Fatal(err)
			}
			if err := s.Close(); err != nil {
				t.Fatal(err)
			}
		})
	}
}
