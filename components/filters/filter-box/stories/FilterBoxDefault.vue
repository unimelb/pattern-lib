<template>
  <FilterBox
    :options="options"
    filter-by="Course types"
    :placeholder-label="{
      plural: 'course types',
      singular: 'course type',
    }"
    options-label="Course types to include:" />
</template>

<script>
import FilterBox from '../FilterBox.vue';
import options from '../../options.json';
import filterBox from './filter-box.md';

export default {
  readme: { custom: filterBox, source: false, html: false },
  name: 'FilterBoxDefault',
  components: { FilterBox },
  data() {
    return {
      options,
    };
  },
};
</script>
