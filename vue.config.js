const { defineConfig } = require('@vue/cli-service');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,

    pluginOptions: {
        vuetify: {
        },
    },

    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;

        config.plugins.push(
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: ['/','/impressum','/datenschutz','/Preise','/Berichte','/Seminare','/Chiropraktik','/Ernährung','/Osteopathie','/Physiotherapie','/Video','/Produkt','/Verwaltung'],
            })
        );
    },
});