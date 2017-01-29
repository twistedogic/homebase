const SEARCH_URL = "http://www.midland.com.hk/find-property/data/search_list_results"
const searchQuery = (pageNo,type = "rent") => {
  let body = {
    "estate_name":"",
    "priceFrom":null,
    "priceTo":null,
    "areaFrom":null,
    "areaTo":null,
    "bedroom":"",
    "tx_type":"L",
    "area_type":"net_area",
    "is_hos":false,
    "autocompleteString":"",
    "districtIds":"",
    "estIds":"",
    "latLngBounds":"",
    "page":pageNo,
    "sort":"",
    "bldgIds":"",
    "zoomLevel":11,
    "feature":"",
    "is_random":false
  }
  if (type == "buy"){
    body["tx_type"]="S"
  }
  return body
}

const request = (pageNo, type = "rent") => {
  return {
    uri:SEARCH_URL,
    method:"POST",
    json:true,
    body:searchQuery(pageNo,type)
  }
}

export {
  searchQuery
}

export default request
