
<template>
<div>
  <Header />
  <tiku />
</div>
</template>

<script>
import tiku from '../components/chiku.vue';
import Header from '../components/header.vue';

export default {
  components: {
    tiku,Header
  }
}
</script>