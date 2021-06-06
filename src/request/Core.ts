import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'

export default class Core {
  private instance:AxiosInstance

  constructor(customConfig?:AxiosRequestConfig) {
    this.instance = axios.create()

    this.instance.interceptors.request.use((config) => {
      config.headers = {
        ...config.headers,
        'x-icode': 'F32E84C6C4A2B197'
      }

      return {
        ...config,
        ...customConfig,
      }
    })
  }

  post<T = any>(url:string, params?:any):AxiosPromise<T> {
    return this.instance.post<T>(url, params)
  }

  get<T = any>(url:string, params?:any):AxiosPromise<T> {
    return this.instance.get<T>(url, {
      params,
    })
  }

  put<T = any>(url:string, params?:any):AxiosPromise<T> {
    return this.instance.put<T>(url, params)
  }

  delete<T = any>(url:string, params?:any):AxiosPromise<T> {
    return this.instance.delete<T>(url, {
      params,
    })
  }

  head<T = any>(url:string):AxiosPromise<T> {
    return this.instance.head<T>(url)
  }

  patch<T = any>(url:string, params?:any):AxiosPromise<T> {
    return this.instance.patch<T>(url, params)
  }
}
