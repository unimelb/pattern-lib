<template>
  <FilteredResults
    :items="0"
    :filters="0"
    :callback="() => false" />
</template>

<script>
import FilteredResults from '../FilteredResults.vue';

export default {
  components: { FilteredResults },
};
</script>
