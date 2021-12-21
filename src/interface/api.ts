import { AxiosResponseHeaders, AxiosRequestConfig } from 'axios'
export interface IResp {
  code: number,
  data: [] | object,
  message: string
}
export interface AxiosResponse<T = IResp, D = any>  {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}

export interface IHomeList {
  name: string,
  title?: string,
  id?: number | string,
  date?: string,
  city?: string,
  mobile?: string
}