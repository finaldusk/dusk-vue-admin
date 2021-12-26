import duskRequest from '@/utils/request'
import { IUserLogin, ILoginResult } from './type'
import { IResponse } from '@/utils/request/types'

enum LoginAPI {
  AccountLogin = '/login'
}

export function loginRequest(userLoginDto: IUserLogin) {
  return duskRequest.post<IResponse<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: userLoginDto
  })
}
