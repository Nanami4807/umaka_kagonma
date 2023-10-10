
<template>
<div>
  <Header />
  <tiku />
  <Footer />
</div>
</template>

<script>
import tiku from '../components/chiku.vue';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    tiku,Header,Footer
  }
}
</script>