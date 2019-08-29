<template>
  <section-wrap>
    <div class="logo-listing">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="logo-listing__item">
        <a
          :href="item.url">
          <img
            :alt="item.alt"
            :src="item.src"
            class="logo-listing__image"
          >
        </a>
      </div>
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
