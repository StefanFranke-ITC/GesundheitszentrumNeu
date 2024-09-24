import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import './axios.js'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'


loadFonts()
createApp(App)
    .use(QuillEditor)
    .use(store)
    .use(router)
    .use(vuetify).use(VuePlyr,{
        plyr:{}
})

.mount('#app')