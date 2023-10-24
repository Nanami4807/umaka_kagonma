<template>
<div>

  <div class="bg-indigo">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <button class="border-0 w-100 h-100 bg-blue rounded-0" @click="$router.push('/')"><picture><source srcset="../../image/logo_triming.png" media="(min-width: 500px)" type="image/png"><img class="w-75 change-img" src="../../image/logo.png"></picture></button>
                </div>
                <div class="col-3 d-flex align-items-center">
                    <button type="button" class="border-0 w-100  h-100 h-100 h4 bg-blue rounded-0 text-warning" @click="$router.push('/tiku')">地区</button>
                </div>
                <div class="col-3 d-flex align-items-center">
                    <button type="button" class="border-0 w-100  h-100 h-100 h4 bg-blue rounded-0 text-warning" @click="$router.push('/Category')">カテゴリ</button>
                </div>
                <div class="col-3 d-flex align-items-center">
                    <button type="button" class="border-0 w-100 h-100 h-100 h4 bg-blue rounded-0 text-warning" @click="$router.push('/osusume')">おすすめ</button>
                </div>
            </div>
        </div>
    </div>

  <div class="background">
    <div class="container">
      <div class="p-3">
        <h1>お店一覧</h1>
        <ul>
          <li v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">{{ content.title }}</nuxt-link>
            <p>{{ content.eyecatch.url }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footer class="bg-indigo">
    
      <div class="row">

        <div class="col-md-4">
          <button class="border-0 w-100 h-100 bg-indigo rounded-0" @click="$router.push('/')"><img class="w-75 d-block mx-auto" src="../../image/logo_triming.png"></button>
        </div>

        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/tiku')">地区</button>
        </div>
        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/Category')">カテゴリ</button>
        </div>
        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/osusume')">おすすめ</button>
        </div>

        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/pages/list/1')">記事一覧</button>
        </div>

      </div>
    
    <hr />
  </footer>

</div>
</template>

<script>
import Header from '../../components/header.vue';
import Footer from '../../components/footer.vue';
import axios from 'axios';

export default {
  async asyncData({ params }) {
    const page = params.p || '1'
    const categoryId = params.categoryId
    const limit = 25
    console.log(categoryId)
    console.log(page)
    console.log(limit)
    console.log(`https://umaka.microcms.io/api/v1/blogs/?limit=${limit}&offset=${(page - 1) * limit}}`)
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://umaka.microcms.io/api/v1/blogs/?limit=${limit}${
        categoryId === undefined ? '' : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' }
      }
    )
    //console.log(data)
    return data
  },

  components: {
    Header,Footer
  }
}
</script>