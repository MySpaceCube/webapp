/* eslint-disable @typescript-eslint/restrict-template-expressions */
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default ({
  srcDir: '.',
  target: 'static',
  ssr: true,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Spacecube',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  router: {
    middleware: 'i18n',
    routeNameSplitter: '/',
    trailingSlash: false,
    // @ts-expect-error
    extendRoutes (routes) {
      for (const i in routes) {
        const route = routes[i];
        routes.push({ ...route, name: `lang-${route.name}`, path: `/:lang${route.path}` });
      }
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
  modules: [
    '@nuxt/image-edge'
    // '@nuxtjs/i18n'
  ],
  buildModules: [
    'nuxt-vite'
  ],
  // TODO: Remove comment in 3.2.1. See https://github.com/nuxt-modules/i18n/issues/85
  // i18n: {
  //   defaultLocale: 'en',
  //   langDir: 'locales',
  //   locales: [
  //     { code: 'en', iso: 'en-EN', file: 'fr.json' },
  //     { code: 'fr', iso: 'fr-FR', file: 'fr.json' }
  //   ],
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_redirected',
  //     redirectOn: 'root' // recommended
  //   }
  // },
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  }
});
