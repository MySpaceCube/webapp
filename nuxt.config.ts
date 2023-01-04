require('dotenv').config()

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
          name: 'HomePage',
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
    '@nuxt/image-edge',
    '@nuxtjs/sentry',
    '@nuxtjs/dotenv',
  ],
  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN.
    // Additional Module Options.
    config: {
      // Optional Sentry SDK configuration.
      // Those options are shared by both the Browser and the Server instances.
      // Browser-only and Server-only options should go
      // into `clientConfig` and `serverConfig` objects respectively.
    },
    dotenv: {
      /* module options */
    }
  }
})
