<template>
  <div class="story-container">
    <FilterDropdown
      :options="options"
      options-label="Course types to include:"
      @change="onChange" />
  </div>
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

<style scoped>
  .story-container {
    width: 500px;
    margin: 5rem auto 0;
  }
</style>
