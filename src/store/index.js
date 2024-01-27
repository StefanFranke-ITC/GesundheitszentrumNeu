import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
        contentDelta: '',
        preisArray: [
            {
                id: 1,
                text: 'alhfaognaepgjpaghaopjkfdafhjapegjpajgepj',
                ueberschrift: 'Physiotherapie',
                dauer: '45 Min',
                bild: require('/src/assets/preisBild.png'),
                preis: '300 Euro'
            },
            {
                id: 2,
                text: 'ljngkjsrnhnhlksdmflksngsl sgjslrngms ejfsrunh soeijgso',
                ueberschrift: 'osteopathie',
                dauer: '20 Min',
                bild: require('/src/assets/preisBild.png'),
                preis: '180 Euro'
            },
            {
                id: 3,
                text: 'ljngkjsrnhnhlksdmflksngsl sgjslrngms ejfsrunh soeijgso',
                ueberschrift: 'osteopathie',
                dauer: '20 Min',
                bild: require('/src/assets/preisBild.png'),
                preis: '180 Euro'
            },
            {
                id: 4,
                text: 'ljngkjsrnhnhlksdmflksngsl sgjslrngms ejfsrunh soeijgso',
                ueberschrift: 'osteopathie',
                dauer: '20 Min',
                bild: require('/src/assets/preisBild.png'),
                preis: '180 Euro'
            },
            {
                id: 5,
                text: 'ljngkjsrnhnhlksdmflksngsl sgjslrngms ejfsrunh soeijgso',
                ueberschrift: 'osteopathie',
                dauer: '20 Min',
                bild: require('/src/assets/preisBild.png'),
                preis: '180 Euro'
            },
            {
                id: 6,
                text: 'ljngkjsrnhnhlksdmflksngsl sgjslrngms ejfsrunh soeijgso',
                ueberschrift: 'osteopathie',
                dauer: '20 Min',
                bild: require('/src/assets/preisBild.png'),
                preis: '180 Euro'
            },
        ]
    },

    getters: {
        user: (state) => {
            return state.user
        },
        preiseArray: (state) => {
            return state.preisArray
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
