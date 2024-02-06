import {createRouter, createWebHistory} from 'vue-router'
import ImpressumView from "@/views/ImpressumView";
import DatenschutzView from "@/views/DatenschutzView";
import PreiseView from "@/views/PreiseView.vue";
import LandingpageView from "@/views/LandingpageView.vue";
import SeminarView from "@/views/SeminarView.vue";
import YoutubeView from "@/views/YoutubeView.vue";
import ProduktView from "@/views/ProduktView.vue";
import VerwaltungsView from "@/views/VerwaltungsView.vue";
import BerichteView from "@/views/BerichteView.vue";
import CookieAcceptDecline from "@/views/Cookie-accept-decline.vue";
import ChiropraktikView from "@/views/ChiropraktikView.vue";
import OsteopathieView from "@/views/OsteopathieView.vue";
import PhysiotherapieView from "@/views/PhysiotherapieView.vue";
import ErnearungsberatungView from "@/views/ErnearungsberatungView.vue";

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
        path: '/Chiropraktik',
        name: 'Chiropraktik',
        component: ChiropraktikView
    },
    {
        path: '/Ernährung',
        name: 'Ernährung',
        component: ErnearungsberatungView
    },
    {
        path: '/Osteopathie',
        name: 'Osteopathie',
        component: OsteopathieView
    },
    {
        path: '/Physiotherapie',
        name: 'Physiotherapie',
        component: PhysiotherapieView
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
        path: '/Cookies',
        name: 'cookies',
        component: CookieAcceptDecline
    },
    {
        path: '/:catchAll(.*)',
        component: LandingpageView
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
            };
        } else {
            return {el: document.getElementById('home'), behavior: 'smooth'};
        }
    }
});

router.beforeEach((to, from, next) => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1000) {
        if (to.path === '/') {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});


export default router;