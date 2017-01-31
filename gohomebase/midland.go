package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

const (
	MIDLAND_URL = "http://www.midland.com.hk/find-property/data/search_list_results"
)

type Query struct {
	Estate_name        *string `json:"estate_name"`
	PriceFrom          *string `json:"priceFrom"`
	PriceTo            *string `json:"priceTo"`
	AreaFrom           *string `json:"areaFrom"`
	AreaTo             *string `json:"areaTo"`
	Bedroom            *string `json:"bedroom"`
	Tx_type            string  `json:"tx_type"`
	Area_type          string  `json:"area_type"`
	Is_hos             bool    `json:"is_hos"`
	AutocompleteString *string `json:"autocompleteString"`
	DistrictIds        *string `json:"districtIds"`
	EstIds             *string `json:"estIds"`
	LatLngBounds       *string `json:"latLngBounds"`
	Page               int     `json:"page"`
	Sort               *string `json:"sort"`
	BldgIds            *string `json:"bldgIds"`
	ZoomLevel          int     `json:"zoomLevel"`
	Feature            *string `json:"feature"`
	Is_random          bool    `json:"is_random"`
}

func sP(s string) *string {
	return &s
}

func NewQuery(page int, tx_type string) Query {
	q := Query{}
	q.Estate_name = sP("")
	q.PriceFrom = nil
	q.PriceTo = nil
	q.AreaFrom = nil
	q.AreaTo = nil
	q.Bedroom = sP("")
	q.Tx_type = tx_type
	q.Area_type = "net_area"
	q.Is_hos = false
	q.AutocompleteString = sP("")
	q.DistrictIds = sP("")
	q.EstIds = sP("")
	q.LatLngBounds = sP("")
	q.Page = page
	q.Sort = sP("")
	q.BldgIds = sP("")
	q.ZoomLevel = 11
	q.Feature = sP("")
	q.Is_random = false
	return q
}

func GetMidlandData(page int, tx_type string) []byte {
	var buf bytes.Buffer
	query := NewQuery(page, tx_type)
	j, err := json.Marshal(query)
	if err != nil {
		fmt.Println(err)
	}
	buf.Write(j)
	res, err := http.Post(MIDLAND_URL, "application/json", &buf)
	if err != nil {
		fmt.Println(err)
	}
	defer res.Body.Close()
	b, _ := ioutil.ReadAll(res.Body)
	return b
}
