import {expect} from "chai"
import openrice, {endpoint} from "./scrape"

describe("openrice.js", () => {
  describe("endpoint", () => {
    it("should return openrice url", () =>{
      const expected = {
        uri:"https://www.openrice.com/zh/hongkong/restaurants?page=1",
        method:"GET"
      }
      const output = endpoint(1)
      expect(output).to.eql(expected)
    })
  })
  describe("openrice", () => {
    xit("should return restaurant address", done => {
      openrice(1).then(res => {
        console.log(JSON.stringify(res,null,2))
        done()
      })
    })
  })
})
