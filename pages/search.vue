
<template>
<div>
  <Header />
  <div class="background text-whitesmoke">
    <img class="w-100" src="../image/header.png">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-1"></div>
        <div class="col-md-8 col-sm-10 text-center text-whitesmoke">
          <h1>検索</h1>
          <p>{{'検索ワード:' + text}}</p>
          <ul class="my-0">
            <li class="pb-4" v-for="content in contents" :key="content.id">
              <nuxt-link :to="`/${content.id}`" class="text-whitesmoke text-decoration-none">{{ content.title }}<br>
              <img class="radius-img w-75" :src="content.eyecatch.url"></nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-1"></div>
      </div>      
    </div>
  </div>
  
  <Footer />
</div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import axios from 'axios';

export default {
  components: {
    Header,Footer
  },
    

  //クエリパラメーター取得
  async asyncData({ query }) {
    var text = query.id
    const { data } = await axios.get(
      //検索実行
      `https://umaka.microcms.io/api/v1/blogs/?q=${text}`,
      { headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' } }
    )
    return {
      ...data,
      text,
    };
  }
}

</script>