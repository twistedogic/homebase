package main

import (
	"log"
)

func main() {
	s, err := NewScraper()
	if err != nil {
		log.Fatal(err)
	}
	if err := s.Close(); err != nil {
		log.Fatal(err)
	}
}
