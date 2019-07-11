<template>
  <p class="filter-results__count">{{ data }} results</p>
</template>

<script>
export default {
  props: {
    data: {
      type: Number,
      default: 0,
    },
  },
};
</script>
