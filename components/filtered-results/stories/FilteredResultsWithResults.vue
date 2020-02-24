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
        category: 'major',
      }, {
        id: 'key2',
        category: 'minor',
      }, {
        id: 'key3',
        category: 'major',
      }, {
        id: 'key4',
        category: 'major',
      }, {
        id: 'key5',
        category: 'minor',
      }, {
        id: 'key6',
        category: 'major',
      }],
    };
  },
};
</script>
