import {expect} from "chai"
import centanet from "./scrape"
import record from "../../tools/record"
describe("centanet",function(){
  const recorder = record("centanet")
  this.timeout(10000)
  before(recorder.before)
  it("should return centanet search page data", done => {
    centanet(100).then(res => {
      console.log(res)
      done()
    }).catch(console.log)
  })
  after(recorder.after)
})
