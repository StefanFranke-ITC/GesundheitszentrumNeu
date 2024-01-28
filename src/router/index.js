import { createRouter, createWebHistory } from 'vue-router'
import ImpressumView from "@/views/ImpressumView";
import DatenschutzView from "@/views/DatenschutzView";
import PreiseView from "@/views/PreiseView.vue";
import LandingpageView from "@/views/LandingpageView.vue";
import SeminarView from "@/views/SeminarView.vue";
import YoutubeView from "@/views/YoutubeView.vue";
import ProduktView from "@/views/ProduktView.vue";
import VerwaltungsView from "@/views/VerwaltungsView.vue";
import BerichteView from "@/views/BerichteView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingpageView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
  },
  {
    path: '/Preise',
    name: 'Preise',
    component: PreiseView
  },
  {
    path: '/Berichte',
    name: 'Berichte',
    component: BerichteView
  },
  {
    path: '/Seminare',
    name: 'Seminare',
    component: SeminarView
  },
  {
    path: '/Video',
    name: 'Video',
    component: YoutubeView
  },
  {
    path: '/Produkt',
    name: 'Produkt',
    component: ProduktView
  },
  {
    path: '/Verwaltung',
    name: 'verwaltung',
    component: VerwaltungsView
  },
  {
    path: '/:catchAll(.*)', component: LandingpageView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return {el: document.getElementById('home'), behavior: 'smooth'}
    }
  }
})

export default router
