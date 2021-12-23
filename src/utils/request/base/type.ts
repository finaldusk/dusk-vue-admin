import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface DuskRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface DuskRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: DuskRequestInterceptors<T>
}
