// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default ({
  srcDir: '.',
  target: 'static',
  ssr: false,
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
  components: {
    global: true,
    dirs: ['~/components']
  },
  router: {
    routeNameSplitter: '/',
    trailingSlash: false,
    // @ts-expect-error
    extendRoutes (routes) {
      routes.push(
        {
          name: 'HomePage',
          path: '',
          component: 'pages/index.vue',
          absolute: true
        },
        {
          name: 'users-profile',
          path: ':id',
          component: 'pages/users/[id].vue',
          absolute: true
        },
        {
          name: 'maintenance',
          path: '/maintenance',
          component: 'pages/maintenance.vue',
          absolute: true
        },
        {
          name: 'news',
          path: '/news',
          component: 'pages/news.vue',
          absolute: true
        },
        {
          name: 'feedbacks',
          path: '/feedbacks',
          component: 'pages/feedbacks.vue',
          absolute: true
        },
        {
          name: 'resources',
          path: '/resources',
          component: 'pages/resources.vue',
          absolute: true
        },
        {
          name: 'server',
          path: '/servers',
          component: 'pages/server.vue',
          absolute: true,
          children: [
            {
              name: 'SpaceCube',
              path: '/spacecube',
              component: 'pages/servers/spacecube.vue',
              absolute: true
            },
            {
              name: 'PeepsLords',
              path: '/peepslords',
              component: 'pages/servers/peepslords.vue',
              absolute: true
            }
          ]
        },
        {
          name: 'about',
          path: '/about',
          component: 'pages/about.vue',
          absolute: true
        },
        {
          name: 'login',
          path: '/login',
          component: 'pages/login.vue',
          absolute: true
        },
        {
          name: 'register',
          path: '/register',
          component: 'pages/register.vue',
          absolute: true
        }
      );
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
});
