// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    env: '',
    // Keys within public, will be also exposed to the client-side
    public: {
      appUrl: '',
      apiUrl: '',
      apiVersion: '',
    }
  },
  devtools: { enabled: false },
  modules: [
    // '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    // 'nuxt-security',
    '@sidebase/nuxt-session',
    'dayjs-nuxt',
    '@bootstrap-vue-next/nuxt',
    '@nuxtjs/i18n',
    'nuxt-lodash',
  ],

  css: ['~/assets/styles/main.scss'],
  typescript: {
    strict: true
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  // security: {
  //   headers: {
  //     crossOriginEmbedderPolicy: {
  //       value: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
  //       route: '/**',
  //     }
  //   },
  //   xssValidator: false,
  //   corsHandler: false,
  //   allowedMethodsRestricter: false,
  //   csrf: false,
  // },
  alias: {
    assets: "/<rootDir>/assets"
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'locale-loader.ts',
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-AR',
        file: 'locale-loader.ts',
        dir: 'rtl',
      },
    ],
    experimental: {
      jsTsFormatResource: true,
    },
    lazy: true,
    defaultLocale: 'ar',
    langDir: 'lang',
    strategy: 'prefix',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})
