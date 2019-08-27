<template>
  <section-wrap>
    <div class="logo-listing">
      <a
        v-for="(item, index) in data"
        :key="index"
        :href="item.url"
        class="logo-listing__link">
        <img
          :alt="item.alt"
          :src="item.src"
          class="logo-listing__image"
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
