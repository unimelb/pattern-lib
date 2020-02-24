<template>
  <a
    href="/"
    class="filter-results__card">
    <span class="filter-results__card-label">Major</span>
    <span class="filter-results__card-category">Category name</span>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
