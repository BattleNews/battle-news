export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    title: 'Accueil',
    titleTemplate: '%s - BattleNews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Qulture Web Application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content'
  ],
  router: {
    linkExactActiveClass: 'active'
  },
  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: true,
      brands: true
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
