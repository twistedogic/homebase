import {hk2wgs} from "./util"
import {expect} from "chai"

describe("util.js",()=>{
  describe("hk2wgs",()=>{
    xit("should convert hk80 coordinates to wgs84 lat long", done => {
      hk2wgs(815814,835138).then(res => {
        expect(res).to.have.property("lat")
        expect(res).to.have.property("long")
        done()
      })
    })
  })
})
