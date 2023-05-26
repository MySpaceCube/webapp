/* eslint-disable @typescript-eslint/restrict-template-expressions */
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default ({
  srcDir: '.',
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
  runtimeConfig: {
    // see https://nuxt.com/modules/simple-sitemap
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.space-cube.xyz',
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
          component: 'pages/feedbacks/index.vue',
          absolute: true
        },
        {
          name: 'feedbacks-infos',
          path: '/feedbacks/:id',
          component: 'pages/feedbacks/[id].vue',
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
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxtjs/color-mode',
    '@pinia/nuxt'
    // '@nuxtjs/sentry' -> https://github.com/nuxt-community/sentry-module/issues/530
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  colorMode: {
    // see https://color-mode.nuxtjs.org/
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  // Need https://github.com/nuxt-community/sentry-module/issues/530
  // sentry: {
  //   dsn: process.env.NUXT_SENTRY_DSN, // Enter your project's DSN.
  //   publishRelease: {
  //     authToken: process.env.NUXT_TOKEN_GITHUB,
  //     org: 'SC-xyz',
  //     project: 'webapp',
  //     // Attach commits to the release (requires that the build triggered within a git repository).
  //     setCommits: {
  //       auto: true
  //     }
  //   },
  //   environment: process.env.NUXT_ENV
  // },
  vue: {
    config: {
      productionTip: false,
      devtools: process.env.NUXT_ENV !== 'production'
    }
  },
  buildModules: [
    '@nuxtjs/composition-api/module',
    ['@pinia/nuxt', { disableVuex: false }],
    'nuxt-vite'
  ],
  robots: {
    // https://nuxt.com/modules/robots
    /* module options */
  },
  nuxtIcon: {
    // see: https://icones.js.org/ & https://nuxt.com/modules/icon
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  },
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-EN', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    }
  },
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  }
});
