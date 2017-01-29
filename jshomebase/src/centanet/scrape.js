import rp from "request-promise"
import request, {
  searchQuery
} from './query'

const handler = data => {
  return data
}

const centanet = (pageNo) => {
  const opt = request(pageNo)
  return rp(opt).then(handler)
}

export default centanet
