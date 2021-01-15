module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        title: ['RifficFree'],
        sans: ['Transat'],
        secondary: ['DancingScript']
      },
      fontSize: {
        xxs: '0.6rem'
      },
      spacing: {
        7: '1.75rem',
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      minWidth: {
        '3xl': '48rem',
        '4xl': '56rem'
      },
      colors: {
        black: '#1a1e22',
        lightblack: '#26303c',
        lightwhite: '#f6f8fa',
        secondary: '#f4f5f7',
        darkgray: '#24292e',
        orange: '#ffaa00',
        darkred: '#cb3250',
        lightred: '#e50648',
        darkestblue: '#0e1b30',
        darkblue: '#172b4d',
        slate: '#8892b0',
        lightslate: '#a8b2d1'
      },
      transitionDuration: {
        250: '250ms'
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.645,0.045,0.355,1)'
      },
      backgroundOpacity: {
        35: '0.35'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
