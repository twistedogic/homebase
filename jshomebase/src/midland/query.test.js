import {expect} from "chai"
import request,{ searchQuery } from "./query"
describe("midland",() => {
  describe("searchQuery",() => {
    const default_obj = {
      "estate_name":"",
      "priceFrom":null,
      "priceTo":null,
      "areaFrom":null,
      "areaTo":null,
      "bedroom":"",
      "tx_type":"L",
      "area_type":"net_area",
      "is_hos":false,
      "autocompleteString":"",
      "districtIds":"",
      "estIds":"",
      "latLngBounds":"",
      "page":1,
      "sort":"",
      "bldgIds":"",
      "zoomLevel":11,
      "feature":"",
      "is_random":false
    }
    it("should return request body with default tx_type", () => {
      const output = searchQuery(1)
      const expected = Object.assign(default_obj)
      expect(output).to.eql(expected)
    })
  })
})
