import { Module } from 'vuex'

import { loginRequest } from '@/api/auth/index'
import storageFactory from '@/utils/storage'
import router from '@/router'

import type { IUserLogin } from '@/api/auth/type'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

import { ElLoading } from 'element-plus'

const storage = new storageFactory()

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: storage.get('token')
    }
  },
  getters: {},
  mutations: {
    setToken(state, token: string) {
      state.token = token
      storage.set('token', token)
    }
  },
  actions: {
    async login({ commit }, payload: IUserLogin) {
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const loginResult = await loginRequest(payload)
      loading.close()
      const { token } = loginResult.data
      commit('setToken', token)
      router.push('/home')
    }
  }
}

export default loginModule
