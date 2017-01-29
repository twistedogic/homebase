import requests
import json
url = "http://www.midland.com.hk/find-property/data/search_list_results"
payload={"estate_name":"","priceFrom":0,"priceTo":None,"areaFrom":None,"areaTo":None,"bedroom":"","tx_type":"L","area_type":"net_area","is_hos":False,"autocompleteString":"","districtIds":"","estIds":"","latLngBounds":"","page":1,"sort":"","bldgIds":"","zoomLevel":11,"feature":"","is_random":False}

headers = {'content-type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)
print response.content
