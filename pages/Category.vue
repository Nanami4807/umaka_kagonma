<template>
<div>
  <Header />
  <category />
</div>
</template>

<script>
import category from '../components/kategori.vue';
import Header from '../components/header.vue';

export default {
  components: {
    category,Header
  }
}
</script>