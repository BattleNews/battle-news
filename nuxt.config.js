export default {
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    title: 'Accueil',
    titleTemplate: '%s - BattleNews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Battle News est un jeu de cartes de 3 à 8 joueurs qui vous plonge dans le monde des médias et de l’information.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
      }
    }
  },
  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: true,
      brands: true
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
