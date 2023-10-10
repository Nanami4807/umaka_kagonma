<template>
<div>

  <Header />

  <div class="background">
    <div class="container">
      <h1>お店一覧</h1>
      <ul>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>

  <Footer />

</div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://umaka.microcms.io/api/v1/blogs',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' }
      }
    )
    return data
  },

  components: {
    Header,Footer
  }
}
</script>