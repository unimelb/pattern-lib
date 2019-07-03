<template>
  <div class="tags">
    <a
      v-for="item in data"
      :key="item.id"
      :href="item.href"
      class="tags__item">
      {{ item.value }}
    </a>
  </div>
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
