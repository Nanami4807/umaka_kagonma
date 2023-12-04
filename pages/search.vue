
<template>
<div>
  <Header />
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">{{ content.title }}</nuxt-link>
    </li>
  </ul>
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
    
  async asyncData({ query }) {
    var text
    console.log(query.id)
    console.log(`https://umaka.microcms.io/api/v1/blogs/?q=${text}`)
    text = query.id
    const { data } = await axios.get(
      `https://umaka.microcms.io/api/v1/blogs/?q=${text}`,
      { headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' } }
    )
    return data
  }
}

</script>