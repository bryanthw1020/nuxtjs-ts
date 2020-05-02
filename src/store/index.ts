require('dotenv').config()

import { ActionTree, GetterTree, MutationTree } from 'vuex'

import { Snackbar } from '@/types/snackbar'

export const state = () => ({
  appName: process.env.APP_NAME as string,
  overlay: false,
  snackbar: {
    color: '',
    message: '',
    show: false,
    timeout: 3000
  } as Snackbar
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  //
}

export const mutations: MutationTree<RootState> = {
  toggleOverlay(state, value: boolean) {
    state.overlay = value
  },
  openSnackbar(state, data: Snackbar) {
    state.snackbar.show = true
    state.snackbar.color = data.color
    state.snackbar.message = data.message
    state.snackbar.timeout = data.timeout || 3000
  },
  closeSnackbar(state) {
    state.snackbar.show = false
    state.snackbar.timeout = 3000
    state.snackbar.message = state.snackbar.color = ''
  }
}

export const actions: ActionTree<RootState, RootState> = {
  openSnackbar({ commit }, params: Snackbar) {
    commit('openSnackbar', params)

    setTimeout(() => {
      commit('closeSnackbar')
    }, params.timeout || 3000)
  },
  closeSnackbar({ commit }) {
    commit('closeSnackbar')
  }
}
