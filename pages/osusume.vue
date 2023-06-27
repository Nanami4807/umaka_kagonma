<template>
<div>
  <Header />
  <osusume />
</div>
</template>

<script>
import Header from '../components/header.vue';
import osusume from '../components/recommendation.vue';

export default {
  components: {
    Header,osusume
  }
}
</script>
