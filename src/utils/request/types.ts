export interface IResponse<T = any> {
  errors: Array<IError>
  data: T
  datas: Array<T>
  total: number
}

export interface IError {
  code: string
  message: string
}
