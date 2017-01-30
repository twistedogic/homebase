import "babel-polyfill"
import rp from "request-promise"
import cheerio from "cheerio"

const BASE = "https://en.wikipedia.org"
const URL = "https://en.wikipedia.org/wiki/List_of_MTR_stations"
const opt = {
  uri:URL,
  method:"GET"
}

const getLatLong = async (link) => {
  const page = await rp({uri:BASE + link, method:"GET"})
  const $ = cheerio.load(page)
  const name = $("title").text().split(" - ")[0]
  const geo = $(".geo").text().split(";")
  const lat = geo[0].trim()
  const long = geo[geo.length - 1].trim()
  return {
    name,lat,long
  }
}

const mtr = async () => {
  const wiki = await rp(opt)
  const $ = cheerio.load(wiki)
  const links = $("td a").map((i,elem)=>{
    return $(elem).attr("href")
  }).get().filter(item => item.indexOf("Station") !== -1 && item.indexOf(".") === -1)
  const req = links.map(getLatLong)
  const data = await Promise.all(req)
  return data
}

export {getLatLong}
export default mtr
