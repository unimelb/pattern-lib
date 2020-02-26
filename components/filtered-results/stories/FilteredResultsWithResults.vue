<template>
  <FilteredResults
    :items="items"
    :filters="['undergrad']"
    :callback="changeCategory" />
</template>

<script>
import FilteredResults from '../FilteredResults.vue';

export default {
  components: { FilteredResults },
  data() {
    return {
      items: [{
        id: 'key1',
        type: 'major',
        name: 'Some category name',
      }, {
        id: 'key2',
        type: 'minor',
        name: 'Some category name',
      }, {
        id: 'key3',
        type: 'major',
        name: 'Some category name',
      }, {
        id: 'key4',
        type: 'major',
        name: 'Some category name',
      }, {
        id: 'key5',
        type: 'minor',
        name: 'Some category name',
      }, {
        id: 'key6',
        type: 'major',
        name: 'Some category name',
      }],
    };
  },
  methods: {
    changeCategory(value) {
      this.$emit('popup:event', value);
    },
  },
};
</script>
