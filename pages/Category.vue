<template>
<div>
  <Header />
  <category />
  <Footer />
</div>
</template>

<script>
import category from '../components/kategori.vue';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    category,Header,Footer
  }
}
</script>