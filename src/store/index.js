import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
        contentDelta: '',
        preiseArray: [],
        videoArray: [],
        berichteArray: [],
        kontaktaufnahmenArray: []
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
        berichteArray: (state) => {
            return state.berichteArray
        },
        kontaktaufnahmenArray: (state) => {
            return state.kontaktaufnahmenArray
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
