<template>
<div>
  <Home />
  <Footer />
</div>
</template>

<script>
import Header from '../components/header.vue';
import Home from '../components/home.vue';
import Footer from '../components/footer.vue';

export default {
  components:
    {
      Header,Home,Footer
    }
}
</script>
