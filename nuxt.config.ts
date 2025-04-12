// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Вимикаємо SSR, використовуємо тільки клієнтський рендеринг (SPA)
  ssr: false,
  
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },
  modules: [
    'vuetify-nuxt-module'
  ],
  app: {
    // Забезпечує правильне завантаження сторінок
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})