// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
  css: ['@/assets/css/main.scss'],
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 800],
        ital: [300],
      },
      Ubuntu: [400],
    },
    display: 'swap',
    download: false,
    overwriting: true,
  },
});
