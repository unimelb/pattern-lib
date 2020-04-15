<template>
  <div class="story-container">
    <FilterDropdown
      v-if="isVisible"
      :options="options"
      placeholder-label="course types"
      options-label="Course types to include:"
      @change="onChange"
      @clear="onClear" />
    <button @click="hideDropdown">
      {{ isVisible ? 'hide' : 'show' }} dropdown
    </button>
  </div>
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
import options from '../../options';
import FilterDropdown from '../FilterDropdown.vue';
import filterDropdown from './filter-dropdown.md';

export default {
  readme: { custom: filterDropdown, source: true, html: false },
  components: { FilterDropdown },
  data() {
    return {
      isVisible: true,
      options,
    };
  },
  methods: {
    onChange(changedOptions) {
      this.options = changedOptions;
    },
    hideDropdown() {
      this.isVisible = !this.isVisible;
    },
    onClear() {
      this.options = cloneDeep(options);
    },
  },
};
</script>

<style scoped>
  .story-container {
    max-width: 500px;
    margin: 5rem auto 0;
  }
</style>
