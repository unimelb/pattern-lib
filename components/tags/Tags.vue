<template>
  <div class="tags">
    <span
      v-for="item in data"
      :key="item.id"
      class="tags__item">
      {{ item }}
    </span>
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
