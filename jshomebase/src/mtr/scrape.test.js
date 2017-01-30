import {expect} from "chai"
import mtr,{getLatLong} from "./scrape"

describe("mtr",function(){
  this.timeout(10000)
  xdescribe("getLatLong", () => {
    it("should return lat long data from wiki", done => {
      getLatLong("/wiki/Admiralty_Station_(MTR)").then(res => {
        expect(res).to.have.property("name")
        expect(res).to.have.property("lat")
        expect(res).to.have.property("long")
        done()
      })
    })
  })
  xdescribe("mtr", () => {
    it("should return all hk mtr station lat long",done => {
      mtr().then(res => {
        expect(res.length > 0).to.be.true
        done()
      }).catch(console.log)
    })

  })
})
