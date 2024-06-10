export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'EKIT',

      link: [
        // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
  dir: {
    assets: 'app/assets',
    public: 'app/public',
    modules: 'app/modules',
    plugins: 'app/plugins',
    pages: 'src/pages',
    layouts: 'src/layouts',
    middleware: 'src/middleware'
  },
  components: ['src/shared'],

  modules: [
    ['@nuxtjs/eslint-module', { fix: true }],
    'nuxt-swiper',
    '@pinia/nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/app/assets/styles/main.scss"; '
        }
      }
    }
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: ''
    }
  }
})
