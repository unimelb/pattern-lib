<template>
  <FilterDropdown
    :options="options"
    :parent-ids="[]" />
</template>

<script>
import FilterDropdown from '../FilterDropdown.vue';
import options from './options';

export default {
  components: { FilterDropdown },
  data() {
    return {
      options,
    };
  },
};
</script>
