<template>
  <FilteredResults
    :items="-1"
    :filters="0"
    :callback="() => false" />
</template>

<script>
import FilteredResults from '../FilteredResults.vue';

export default {
  components: { FilteredResults },
};
</script>
