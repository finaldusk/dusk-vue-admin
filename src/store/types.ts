import { ILoginState } from './user/types'

export interface IRootState {
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
