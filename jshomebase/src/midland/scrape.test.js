import {expect} from "chai"
import midland from "./scrape"
describe("midland.js",() => {
  xdescribe("midland",() => {
    it("should return midland search page data", done => {
      midland(1).then(res => {
        console.log(res.length)
        done()
      }).catch(console.log)
    })
  })
})
