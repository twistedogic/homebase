package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"os"
)

const (
	URL = "http://www.midland.com.hk/find-property/data/search_list_results"
)

var (
	query []byte = []byte(`{"estate_name":"","priceFrom":0,"priceTo":null,"areaFrom":null,"areaTo":null,"bedroom":"","tx_type":"L","area_type":"net_area","is_hos":false,"autocompleteString":"","districtIds":"","estIds":"","latLngBounds":"","page":1,"sort":"","bldgIds":"","zoomLevel":11,"feature":"","is_random":false}`)
)

func main() {
	var buf bytes.Buffer
	buf.Write(query)
	res, err := http.Post(URL, "application/json", &buf)
	if err != nil {
		fmt.Println(err)
	}
	defer res.Body.Close()
	_, err = io.Copy(os.Stdout, res.Body)
	if err != nil {
		fmt.Println(err)
	}
}
