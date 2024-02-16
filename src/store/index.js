import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
        contentDelta: '',
        preiseArray: [],
        videoArray: [],
        berichteArray: [],
        kontaktaufnahmenArray: [],
        rechnungArray: [],
        seminarArray: [],
        produkteArray: [],
        wide: false,
        tablet: false,
        tabletHorizontal: false,
        mobile: false,
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
        seminarArray: (state) => {
            return state.seminarArray
        },
        produkteArray: (state) => {
            return state.produkteArray
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
