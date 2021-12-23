import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { DuskRequestInterceptors, DuskRequestConfig } from './type'
import type { IResponse } from '../types'

class DuskRequest {
  instance: AxiosInstance
  interceptors?: DuskRequestInterceptors
  constructor(config: DuskRequestConfig) {
    this.instance = axios.create(config)

    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 公共请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //公共请求拦截器
        return config
      },
      (err) => {
        //公共请求错误拦截器
        return err
      }
    )

    // 公共响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 公共响应拦截器
        const data = res.data as IResponse
        if (data.errors != null && data.errors.length > 0) {
          console.error(`发生错误:${data.errors.map((t) => t.message).join()}`)
        }
        return data
      },
      (err) => {
        // 公共响应错误拦截器
        return err
      }
    )
  }

  request<T extends IResponse>(config: DuskRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 配置实例请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 配置实例响应拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T extends IResponse>(config: DuskRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T extends IResponse>(config: DuskRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T extends IResponse>(config: DuskRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T extends IResponse>(config: DuskRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default DuskRequest
