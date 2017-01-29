import {expect} from "chai"
import request,{ searchQuery } from "./query"
describe("centanet",() => {
  describe("searchQuery",() => {
    it("should return request body with default tx_type", () => {
      const output = searchQuery(1)
      const expected = "http://hk.centanet.com/findproperty/zh-HK/Home/SearchResult/?posttype=R&src=F&mktid=&minprice=&maxprice=&sortcolumn=&sorttype=&limit=100&currentpage=1"
      expect(output).to.eql(expected)
    })
  })
})

