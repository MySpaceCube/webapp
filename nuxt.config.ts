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
        {name: 'description', content: 'My amazing site.'}
      ],
    }
  },
  plugins: [],
  router: {
    routeNameSplitter: '/',
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: "index",
          path: "/",
          component: "pages/index.vue",
        },
        {
          name: 'users-profile',
          path: ':id',
          component: 'pages/users/[id].vue'
        },
        {
          name: "maintenance",
          path: "/maintenance",
          component: "pages/maintenance.vue"
        },
        {
          name: "news",
          path: "/news",
          component: "pages/index.vue",
        },
        {
          name: "feedbacks",
          path: "/feedbacks",
          component: "pages/index.vue",
        },
        {
          name: "resources",
          path: "/resources",
          component: "pages/index.vue",
        },
        {
          name: "server",
          path: "/server",
          component: "pages/index.vue",
        },
        {
          name: "about",
          path: "/about",
          component: "pages/index.vue",
        },
        {
          name: 'login-redirect',
          path: '/',
          component: '~/pages/index.vue'
        }
      );
    }
  },
  image: {
    dir: 'img'
  },
  buildModules: [
    'nuxt-vite',
    '@nuxt/image-edge',
  ]
});
