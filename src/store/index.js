import { createStore } from 'vuex'

export default createStore({
  state: {
    user: false,
    contentDelta: ''
  },

  getters: {
    user: (state) => {
      return state.user
    },
    contentDelta: (state) => {
      return state.contentDelta
    },
  },
  mutations: {
    user(state, user) {
      state.user = user
    },
  },
  actions: {
    user(context, user) {
      context.commit('user', user)
    },
  },
  modules: {
  }
})
