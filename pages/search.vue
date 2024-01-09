
<template>
<div>
  <Header />
  <div class="background">
    <img class="w-100" src="../image/header.png">
    <ul class="my-0">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">{{ content.title }}</nuxt-link>
      </li>
    </ul>
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
    return data
  }
}

</script>