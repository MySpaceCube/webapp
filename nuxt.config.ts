const config = require('./configs/app.js');

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: './src',
  target: 'static',
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  plugins: [
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'login-redirect',
        path: '/',
        component: '~/pages/index.vue'
      }
      );
    }
  },
  buildModules: [
    'nuxt-vite'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/settings/_colors.scss" as *;',
        },
      },
    },
  }
});
