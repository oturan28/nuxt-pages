// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-phosphor-icons',
    '@nuxt/content'
  ],
  experimental: {
    componentIslands: 'local+remote'
  }
})
