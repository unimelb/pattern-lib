<template>
  <FilteredResults
    :items="[]"
    :filters="[]"
    :callback="() => false" />
</template>

<script>
import FilteredResults from '../FilteredResults.vue';

export default {
  components: { FilteredResults },
};
</script>
