<template>
  <div class="wrapper">
    <ul class="pager p-0">
      <li v-if="current > 1" class="page arrow">
        <nuxt-link :to="getPath(current - 1)">
          <img src="../image/chevron-left.svg" alt="前のページへ" />
        </nuxt-link>
      </li>
      <li v-if="3 < current" class="page">
        <nuxt-link :to="getPath(1)">
          1
        </nuxt-link>
      </li>
      <li v-if="4 < current" class="omission">
        ...
      </li>
      <li
        v-for="p in pager"
        v-show="current - 3 <= p && p <= current + 1"
        :key="p"
        class="page"
        :class="{ active: current === p + 1 }"
      >
        <nuxt-link :to="getPath(p + 1)">
          {{ p + 1 }}
        </nuxt-link>
      </li>
      <li v-if="current + 3 < pager.length" class="omission">
        ...
      </li>
      <li v-if="current + 2 < pager.length" class="page">
        <nuxt-link :to="getPath(pager.length)">
          {{ pager.length }}
        </nuxt-link>
      </li>
      <li v-if="current < pager.length" class="page arrow">
        <nuxt-link :to="getPath(current + 1)">
          <img src="../image/chevron-right.svg" alt="前のページへ" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //list.vueにデータを渡す
  props: {
    pager: {
      type: Array,
      required: false,
      default: () => [],
    },
    current: {
      type: Number,
      required: true,
    },
    category: {
      type: Object,
      required: false,
      default: undefined,
    },
    tiku: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  methods: {
    getPath(p) {
      return `/${this.category !== undefined ? `category/${this.category.id}/` : this.tiku !== undefined ? `tiku/${this.tiku.id}/` : ''}pages/list/${p}`;
    },
  },
};
</script>