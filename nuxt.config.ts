// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/styles/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hub: {
    database: true,
    kv: true,
    blob: true
  },
  modules: [
    'nuxt-swiper',
    '@nuxt/icon',
    '@nuxt/ui',
    '@sidebase/nuxt-auth',
    '@nuxthub/core' 

  ],
  swiper: { // Swiper options
    //----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  auth: { // Nuxt-Auth options
    isEnabled: false,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: 'http://localhost:3000/api/auth',
    provider: { 
      type: 'authjs',
      trustHost: false,
      addDefaultCallbackUrl: true  
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  },
  runtimeConfig: {
    authSecret: '123',
  }
})