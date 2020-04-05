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
import FilterDropdown from '../FilterDropdown.vue';
import options from '../../options';

export default {
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
