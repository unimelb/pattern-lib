<template>
  <FilterBox
    :options="options"
    filter-by="Course types"
    placeholder-label="course types"
    options-label="Course types to include:" />
</template>

<script>
import FilterBox from '../FilterBox.vue';
import options from '../../filter-dropdown/stories/options.json';

export default {
  name: 'FilterBoxDefault',
  components: { FilterBox },
  data() {
    return {
      options,
    };
  },
};
</script>
