<template>
  <div class="story-container">
    <FilterDropdown
      v-if="isVisible"
      :options="options"
      options-label="Course types to include:"
      @change="onChange" />
    <button @click="hideDropdown">
      {{ isVisible ? 'hide' : 'show' }} dropdown
    </button>
  </div>
</template>

<script>
import FilterDropdown from '../FilterDropdown.vue';
import options from './options';

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
  },
};
</script>

<style scoped>
  .story-container {
    width: 500px;
    margin: 5rem auto 0;
  }
</style>
