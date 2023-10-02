export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-github-test',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {src: 'https://unpkg.com/aos@next/dist/aos.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js'}
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' , rel:'stylesheet' ,integrity:'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' , crossorigin:'anonymous'},
      { href:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' , rel:'stylesheet'},
      { href:'https://unpkg.com/aos@next/dist/aos.css' , rel:'stylesheet'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dayjs'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
