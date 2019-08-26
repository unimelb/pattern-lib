<template>
  <section-wrap>
    <div class="logo-farm">
      <a
        v-for="(item, index) in data"
        :key="index"
        :href="item.url"
        class="logo-farm__link">
        <img
          :alt="item.alt"
          :src="item.src"
          class="logo-farm__image"
        >
      </a>
    </div>
  </section-wrap>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
