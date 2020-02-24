<template>
  <FilteredResults
    :items="items"
    :filters="[]" />
</template>

<script>
import FilteredResults from '../FilteredResults.vue';

export default {
  components: { FilteredResults },
  data() {
    return {
      items: [{
        id: 'key1',
      }, {
        id: 'key2',
      }, {
        id: 'key3',
      }],
    };
  },
};
</script>
