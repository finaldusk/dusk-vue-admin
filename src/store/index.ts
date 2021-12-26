import { createStore, Store, useStore as useVuexStore } from 'vuex'

import user from './user/user'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      entireMenu: []
    }
  },
  mutations: {
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {},
  modules: {
    user
  }
})

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
