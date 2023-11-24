// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image-edge', '@nuxt/image'],
  css: ['@/assets/fonts/fonts.scss', '@/assets/css/main.scss'],
  image: {
    provider: 'vercel',
    domains: ['devtwit8.ru'],
    format: ['avif'],
    screens: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1340,
    },
    quality: 70,
  },
});
