// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default ({
  srcDir: './src',
  target: 'static',
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ]
    }
  },
  router: {
    routeNameSplitter: '/',
    // @ts-expect-error
    extendRoutes (routes) {
      routes.push(
        {
          name: 'index',
          path: '/',
          component: 'pages/index.vue'
        },
        {
          name: 'users-profile',
          path: ':id',
          component: 'pages/users/[id].vue'
        },
        {
          name: 'maintenance',
          path: '/maintenance',
          component: 'pages/maintenance.vue'
        },
        {
          name: 'news',
          path: '/news',
          component: 'pages/news.vue'
        },
        {
          name: 'feedbacks',
          path: '/feedbacks',
          component: 'pages/feedbacks.vue'
        },
        {
          name: 'resources',
          path: '/resources',
          component: 'pages/resources.vue'
        },
        {
          name: 'server',
          path: '/server',
          component: 'pages/server.vue'
        },
        {
          name: 'about',
          path: '/about',
          component: 'pages/about.vue'
        },
        {
          name: 'login',
          path: '/login',
          component: '~/pages/login.vue'
        },
        {
          name: 'register',
          path: '/register',
          component: '~/pages/register.vue'
        }
      )
    }
  },
  image: {
    dir: 'public/img'
  },
  buildModules: [
    'nuxt-vite',
    '@nuxt/image-edge'
  ],
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  }
})
