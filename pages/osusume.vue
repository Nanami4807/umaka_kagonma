<template>
<div>
  <Header />
  <osusume />
  <Footer />
</div>
</template>

<script>
import Header from '../components/header.vue';
import osusume from '../components/recommendation.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    Header,osusume,Footer
  }
}
</script>
