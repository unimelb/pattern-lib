<template>
  <FilterDropdown
    :options="options"
    @change="onChange" />
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
  methods: {
    onChange(changedOptions) {
      this.options = changedOptions;
    },
  },
};
</script>
