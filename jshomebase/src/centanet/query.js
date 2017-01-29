import qs from "querystring"

const SEARCH_URL = "http://hk.centanet.com/findproperty/BLL/Result_SearchHandler.ashx?url="
const searchQuery = (pageNo) => {
  const base = "http://hk.centanet.com/findproperty/zh-HK/Home/SearchResult/?"
  const query = {
    posttype:"R",
    src:"F",
    mktid:null,
    minprice:null,
    maxprice:null,
    sortcolumn:null,
    sorttype:null,
    limit:100,
    currentpage:pageNo
  }
  return `${base}${qs.stringify(query)}`
}

const request = (pageNo) => {
  return {
    uri:`${SEARCH_URL}${searchQuery(pageNo)}`,
    method:"GET",
    json:true
  }
}

export {
  searchQuery
}

export default request
