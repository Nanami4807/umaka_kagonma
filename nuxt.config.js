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

  router: {
    //ルーティング
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/pages/list/:p',               
        component: resolve(__dirname, 'pages/list/list.vue'),
        name: 'page',
      });

      routes.push({
        path: '/category/:categoryId/pages/list/:p',  //url例(http://localhost:3000/category/tyu-ou/pages/list/1)
        component: resolve(__dirname, 'pages/list/list.vue'),
        name: 'category',
      })

      routes.push({
        path: '/tiku/:tikuId/pages/list/:p',                    //こんな感じのURLが来たら
        component: resolve(__dirname, 'pages/list/list.vue'),   //ここに表示する
        name: 'tiku',
      })

    },
  },

  //静的生成対応
  generate: {
    async routes() {
      const axios = require('axios')
      const limit = 10
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

      // 一覧のページング
      const pages = await axios
        .get(`https://umaka.microcms.io/api/v1/blogs?limit=0`, {
          headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' },
        })
          .then((res) =>
            range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
              route: `/page/${p}`,
            }))
          )

      const categories = await axios
      .get(`https://umaka.microcms.io/api/v1/category?fields=id`, {
        headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' },
      })
        .then(({ data }) => {                                 //function(data){return data.contents.map(function(content){content.id}) ってこと？
          return data.contents.map((content) => content.id)     
        });

      const chiku = await axios     //
      .get(`https://umaka.microcms.io/api/v1/tiku?fields=id`, {
        headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' },
      })
        .then(({ data }) => {
          return data.contents.map((content) => content.id)     
        });

      // カテゴリーページのページング
      const categoryPages = await Promise.all(      //Promise.all（）内の全ての命令を並列に実行して，終わったら戻り値を返して，一つでも失敗すれば失敗した時点での戻り値を返す
        categories.map((category) =>                //=> functionの代わり
          axios.get(
            `https://umaka.microcms.io/api/v1/blogs?limit=0&filters=category[equals]${category}`,
            { headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' } }
          )
            .then((res) =>
              range(1, Math.ceil(res.data.totalCount / 10)).map((p) => ({
                route: `/category/${category}/page/${p}`,
              })))
            )
          )

        //地区ページのページング
        const tikuPages = await Promise.all(        //Promise「まだ完了していない（かもしれない）結果」を表す。完了後の処理をthen()メソッドの引数として与えることができる
          chiku.map((tiku) =>
                    axios.get(
                      `https://umaka.microcms.io/api/v1/blogs?limit=0&filters=tiku[equals]${tiku}`,
                      { headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' } }
                    )
                      .then(
                            (res) =>range(1, Math.ceil(res.data.totalCount / 10)).map((p) => ({route: `/tiku/${tiku}/page/${p}`,}))   //res?
                          )
                    )
            )
  
      // 2次元配列になってるのでフラットにする
      const flattenCategoryPages = [].concat.apply([], categoryPages)
      return [...pages, ...flattenCategoryPages]

      const flattentikuPages = [].concat.apply([], tikuPages)
      return [...pages, ...flattentikuPages]
    },
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
    '@nuxtjs/axios'         
  ],

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
