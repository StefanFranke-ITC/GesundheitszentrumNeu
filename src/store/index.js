import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
        contentDelta: '',
        preiseArray: [],
        videoArray: []
    },

    getters: {
        user: (state) => {
            return state.user
        },
        preiseArray: (state) => {
            return state.preiseArray
        },
        videoArray: (state) => {
            return state.videoArray
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
    modules: {}
})
