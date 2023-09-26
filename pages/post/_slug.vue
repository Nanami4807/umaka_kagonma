<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <p>
      投稿日：{{ $dayjs(post.createdAt).format("YYYY/MM/DD") }}<br />
      更新日：{{ $dayjs(post.updatedAt).format("YYYY/MM/DD") }}
    </p>
    <p>カテゴリー：{{ getCatName(post.category) }}</p>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import Vue from "vue";
import taxonomy from "@/taxonomy";
export default Vue.extend({
  async asyncData ({ $content, params }) {
    const post = await $content(`post/${params.slug}`).fetch()
    return { post }
  },
  data () {
    return {
      category: [...taxonomy.category]
    }
  },
  methods: {
    getCatName (cat) {
      return this.category.find((v) => v.slug === cat).text;
    }
  }
})
</script>

<style scoped>
</style>