package main

import (
	"encoding/json"
	"strings"
	"testing"
)

var NewQueryTestCase = []struct {
	page    int
	tx_type string
	output  string
}{
	{1, "L", "\"page\":1"},
	{2, "L", "\"page\":2"},
	{3, "L", "\"page\":3"},
}

func TestNewQuery(t *testing.T) {
	for _, test := range NewQueryTestCase {
		query := NewQuery(test.page, test.tx_type)
		b, _ := json.Marshal(query)
		output := string(b)
		if !strings.Contains(output, test.output) {
			t.Fatalf("Query return %v", output)
		}
	}
}

var GetMidlandDataTestCase = []struct {
	page    int
	tx_type string
}{
	{1, "L"},
}

func TestGetMidlandData(t *testing.T) {
	for _, test := range GetMidlandDataTestCase {
		data := GetMidlandData(test.page, test.tx_type)
		output := make([]map[string]interface{}, 0)
		json.Unmarshal(data, &output)
		t.Logf("%v", len(output))
		if len(output) != 18 {
			t.Fatalf("GetMidlandData returns %v", output)
		}
	}
}
