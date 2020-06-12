<template>
  <FilteredResults
    :items="0"
    :filters="0"
    :callback="() => false" />
</template>

<script>
import FilteredResults from '../FilteredResults.vue';
import filteredResultsNoResults from './filtered-results-no-results.md';

export default {
  components: { FilteredResults },
  readme: { custom: filteredResultsNoResults, source: true, html: false },
};
</script>
