/* eslint-disable @typescript-eslint/restrict-template-expressions */
// https://v3.nuxtjs.org/api/configuration/nuxt.config

let dynamicRoutes = [];

export default ({
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  srcDir: '.',
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
  runtimeConfig: {
    // see https://nuxt.com/modules/simple-sitemap
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      imgUrl: process.env.NUXT_PUBLIC_IMG_URL
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
          name: 'users-settings',
          path: '/me/settings',
          component: 'pages/users/settings.vue',
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
          name: 'feedbacks-create',
          path: '/feedbacks/crate',
          component: 'pages/feedbacks/create.vue',
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
          name: 'website-tools',
          path: '/website-tools',
          component: 'pages/website.vue',
          absolute: true
        },
        {
          name: 'logout',
          path: '/logout',
          component: 'pages/logout.vue',
          absolute: true
        },
        {
          name: 'login',
          path: '/login',
          component: 'pages/login.vue',
          absolute: true
        },
        {
          name: 'forgot-password',
          path: '/forgotPassword',
          component: 'pages/forgotPassword.vue',
          absolute: true
        },
        {
          name: 'register',
          path: '/register',
          component: 'pages/register.vue',
          absolute: true
        }
      );

      dynamicRoutes = routes;
    }
  },
  image: {
    dir: process.env.NUXT_ENV !== 'dev' ? 'img' : 'public/',
    domains: [
      process.env.NUXT_PUBLIC_SITE_URL,
      process.env.NUXT_PUBLIC_IMG_URL
    ]
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxtjs/color-mode',
    '@pinia/nuxt'
    // '@nuxtjs/sentry' -> https://github.com/nuxt-community/sentry-module/issues/530
  ],
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
    'nuxt-vite',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/vercel',
    '~/plugins/primevue',
    '~/plugins/mitt'
  ],
  robots: {
    // https://nuxt.com/modules/robots
    UserAgent: '*',
    Disallow: '',

    Sitemap: `${process.env.NUXT_PUBLIC_SITE_URL}/sitemap.xml`
  },
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL,
    routes: async () => {
      const routes = [];
      // Génération automatique des routes dynamiques à partir de la configuration de routes
      for (const route of dynamicRoutes) {
        if (route.path.includes(':')) {
          routes.push(route.path);
        }
      }
      return routes;
    }
  },
  nuxtIcon: {
    // see: https://icones.js.org/ & https://nuxt.com/modules/icon
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      nuxt: 'logos:nuxt-icon'
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
