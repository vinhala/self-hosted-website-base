export default defineNuxtConfig({
  compatibilityDate: '2026-05-25',
  devtools: { enabled: false },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      umamiHost: '',
      umamiWebsiteId: '',
    },
  },
})
