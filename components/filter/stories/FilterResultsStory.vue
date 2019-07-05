<template>
  <section-wrap bg-color="white">
    <FilterResultsCount :data="80" />
  </section-wrap>
</template>

<script>
import FilterResultsCount from '../filters-core/results-count/FilterResultsCount.vue';

export default {
  components: { FilterResultsCount },
  readme: { source: true, html: true },
};
</script>
