<template>
  <div>
    <h1>filter results</h1>
    <h1
      v-for="(item, index) in data"
      :key="index">{{ item.value }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>
