import rp from "request-promise"
import request from './query'

const midland = (pageNo) => {
  const opt = request(pageNo)
  return rp(opt)
}

export default midland
