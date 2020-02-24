<template>
  <FilterResults
    :items="items"
    :filters="[]" />
</template>

<script>
import FilterResults from '../FilterResults.vue';

export default {
  components: { FilterResults },
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
