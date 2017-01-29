import {expect} from "chai"
import midland from "./scrape"
xdescribe("midland",() => {
  it("should return midland search page data", done => {
    midland(100).then(res => {
      console.log(JSON.stringify(res,null,2))
      done()
    }).catch(console.log)
  })
})
