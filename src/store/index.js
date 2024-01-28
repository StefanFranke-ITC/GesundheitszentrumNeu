import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
        contentDelta: '',
        preiseArray: [],
        videoArray: [],
        berichteArray: [
            {
            id: 1,
            ueberschrift: 'Die Lebensweise der Bienen',
            bild: require('../assets/preisBild.png'), // Passe dies entsprechend an
            text: '\n' +
                'Die Biene, ein faszinierendes Insekt, spielt eine entscheidende Rolle in unserem Ökosystem. Mit mehr als 20.000 bekannten Arten haben Bienen weitreichende Auswirkungen auf Pflanzenbestäubung, landwirtschaftliche Erträge und die Vielfalt von Flora und Fauna. Hier werfen wir einen Blick auf die Lebensweise dieser kleinen Bestäuber.\n' +
                '\n' +
                'Bienen leben in organisierten Gemeinschaften, bekannt als Kolonien, die von einer Königin, Arbeiterinnen und Drohnen gebildet werden. Die Königin ist das zentrale reproduktive Mitglied, das Eier legt und die Kolonie leitet. Arbeiterinnen sind für die Nahrungssuche, Pflege der Brut und den Schutz der Kolonie verantwortlich, während die Drohnen sich auf die Fortpflanzung konzentrieren.\n' +
                '\n' +
                'Die Nahrung der Bienen besteht hauptsächlich aus Nektar, den sie von Blüten sammeln. Während sie Nektar sammeln, bestäuben sie unbeabsichtigt die Blüten und fördern so den Fortpflanzungsprozess der Pflanzen. Der gesammelte Nektar wird in den Bienenstock gebracht und zu Honig verarbeitet, der als Hauptnahrungsquelle für die Kolonie dient.\n' +
                '\n' +
                'Die Kommunikation in einer Bienenkolonie ist bemerkenswert. Arbeiterinnen verwenden komplexe Tanzbewegungen, um ihren Kollegen den genauen Ort einer reichhaltigen Nahrungsquelle mitzuteilen. Diese Tanzsprache ist ein beeindruckendes Beispiel für die hochentwickelte soziale Organisation innerhalb einer Bienenkolonie.\n' +
                '\n' +
                'Im Winter bildet die Bienenkolonie eine dichte Kugel, um die Königin zu schützen und die Wärme zu bewahren. Während dieser Zeit ruhen sie und ernähren sich von den gespeicherten Vorräten, um den Winter zu überstehen. Die Überlebensfähigkeit der Kolonie hängt von der Effizienz der Nahrungsbeschaffung und der Vorbereitung auf kalte Monate ab.\n' +
                '\n' +
                'Bienen sind jedoch zunehmend von Bedrohungen betroffen, darunter der Verlust von Lebensräumen, der Einsatz von Pestiziden und der Klimawandel. Diese Herausforderungen gefährden nicht nur die Bienenpopulationen, sondern haben auch weitreichende Auswirkungen auf die globalen Ökosysteme.\n' +
                '\n' +
                'Der Schutz und die Erhaltung der Bienen sind von entscheidender Bedeutung, um die Biodiversität zu bewahren und die menschliche Nahrungsmittelversorgung zu sichern. Ein bewusster Umgang mit Pestiziden, die Schaffung von bienenfreundlichen Lebensräumen und die Sensibilisierung für die Bedeutung dieser faszinierenden Bestäuber sind entscheidende Schritte auf dem Weg zu einem nachhaltigen Miteinander von Mensch und Natur.', // Hier füge deinen 30-zeiligen Bericht ein.
            autor: 'Max Mustermann',
            datum: '2024-02-01',
        },
            {
                id: 2,
                ueberschrift: 'Die Bedeutung des Regenwaldes für unser Ökosystem',
                bild: require('../assets/knochen.jpg'), // Passe dies entsprechend an
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...', // Hier füge deinen 30-zeiligen Bericht ein.
                autor: 'Anna Beispiel',
                datum: '2024-02-02',
            },],
        kontaktaufnahmenArray: [],
        seminarArray: [],
        produkteArray: [],
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
