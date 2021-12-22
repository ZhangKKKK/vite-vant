import { PROXY_URL } from "@/config/global"
import { axios } from '@/util/request'

export const getAccountListApi = (params: object) => {
  return axios({
    url: PROXY_URL + '/json/reply/QueryCustomerInfoPageReq',
    method: 'post',
    data: params
  })
}

export const getHomeListApi = (params: object) => {
  return axios({
    url: PROXY_URL + '/home',
    method: 'post',
    data: params
  })
}