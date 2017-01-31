import rp from "request-promise"
import qs from "querystring"
import cheerio from "cheerio"

const URL = "https://www.openrice.com/zh/hongkong/restaurants"

const endpoint = page => {
  const uri = `${URL}?${qs.stringify({page})}`
  return {uri, method:"GET"}
}

const openrice = async (pageNo) => {
  const page = await rp(endpoint(pageNo))
  const $ = cheerio.load(page)
  const addr = $(".address").text()
  return addr
}

export {endpoint}

export default openrice
