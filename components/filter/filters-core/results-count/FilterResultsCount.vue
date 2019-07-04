<template>
  <div class="filter-results-count__container">
    <p class="filter-results-count__results">{{ data }} results</p>
    <p class="filter-results-count__filters-applied">(Filters applied)</p>
  </div>
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
