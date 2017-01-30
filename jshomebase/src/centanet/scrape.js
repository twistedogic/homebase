import rp from "request-promise"
import cheerio from "cheerio"
import request, {
  searchQuery
} from "./query"

const toJson = item => {
  const $ = cheerio.load(item)
  const id = $(".ContentInfo_DetailStr.fLeft.OneRow.redText").text().split(":")[1].trim()
  const district = $(".ContentInfo_Left").children().first().text()
  const addr = $(".ContentInfo_Header").attr("title")
  const x = $(".Map_Content").attr('x')
  const y = $(".Map_Content").attr('y')
  const keys = $(".LargeString").map((i,elem) => {
    return cheerio.load(elem).text().trim()
  }).get()
  const detail = $(".ContentInfo_DetailStr_Lf").map((i,elem) => {
    return cheerio.load(elem).text().trim()
  }).get()
  return {
    id,district,addr,x,y,keys,detail
  }
}

const handler = data => {
  const keys = Object.keys(data)
  const {post} = data
  const $ = cheerio.load(post)
  let list = $(".SearchResult_Row").map((i,elem) => {
    return cheerio.load(elem).html()
  }).get()
  const output = list.map(toJson)
  return output[0]
}

const centanet = (pageNo) => {
  const opt = request(pageNo)
  return rp(opt).then(handler)
}

export default centanet
