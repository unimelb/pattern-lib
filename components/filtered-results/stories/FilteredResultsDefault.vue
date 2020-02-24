<template>
  <FilteredResults
    :items="[]"
    :filters="[]" />
</template>

<script>
import FilteredResults from '../FilteredResults.vue';

export default {
  components: { FilteredResults },
};
</script>
