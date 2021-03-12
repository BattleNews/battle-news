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
      { hid: 'description', name: 'description', content: 'Battle News est un jeu de cartes de 3 à 8 joueurs qui vous plonge dans le monde des médias et de l’information.' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-url', property: 'og:url', content: 'https://battlenews.fr/' },
      { hid: 'og-title', property: 'og:title', content: 'Accueil - BattleNews' },
      { hid: 'og-description', property: 'og:description', content: 'Battle News est un jeu de cartes de 3 à 8 joueurs qui vous plonge dans le monde des médias et de l’information.' },
      { hid: 'og-image', property: 'og:image', content: 'https://battlenews.fr/HERO_BATTLE_NEWS.jpg' },
      { hid: 'twitter-card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter-url', property: 'twitter:url', content: 'https://battlenews.fr/' },
      { hid: 'twitter-title', property: 'twitter:title', content: 'Accueil - BattleNews' },
      { hid: 'twitter-description', property: 'twitter:description', content: 'Battle News est un jeu de cartes de 3 à 8 joueurs qui vous plonge dans le monde des médias et de l’information.' },
      { hid: 'twitter-image', property: 'twitter:image', content: 'https://battlenews.fr/HERO_BATTLE_NEWS.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
  plugins: [
    { src: '~/plugins/aos', ssr: false }
  ],
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
    injected: true,
    html: true
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
