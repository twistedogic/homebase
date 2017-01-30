import "babel-polyfill"
import rp from "request-promise"
import qs from "querystring"

const GRID_URL = "https://api.data.gov.hk/v1/coordinate-conversion"

const hk2wgs = async (x,y) => {
  const query = qs.stringify({
    "hk80-northing":x,
    "hk80-easting":y
  })
  const url = `${GRID_URL}?${query}`
  const data = await rp({uri:url,method:"GET"})
  return {
    lat:data["wgs84-latitude"],
    long:data["wgs84-longitude"]
  }
}

export {hk2wgs}
