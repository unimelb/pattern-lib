<template>
  <FilterBox
    :options="options"
    filter-by="Course types"
    placeholder-label="course types"
    options-label="Course types to include:" />
</template>

<script>
import FilterBox from '../FilterBox.vue';
import options from '../../options.json';
import filterBox from './filter-box.md';

export default {
  readme: { custom: filterBox, source: true, html: false },
  name: 'FilterBoxDefault',
  components: { FilterBox },
  data() {
    return {
      options,
    };
  },
};
</script>
