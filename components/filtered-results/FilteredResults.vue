<template>
  <div class="filtered-results">
    <div class="filtered-results__inner">
      <FilteredResultsTitle
        :items="items"
        :filters="filters"
        :callback="callback" />
      <div class="filtered-results__content">
        <div
          v-if="items.length"
          class="filtered-results__items">
          <slot />
        </div>
        <div
          v-else
          class="filtered-results__no-items">
          <h3>No results</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilteredResultsTitle from './FilteredResultsTitle.vue';

export default {
  components: {
    FilteredResultsTitle,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    filters: {
      type: Array,
      default: () => [],
      required: true,
    },
    callback: {
      type: Function,
      required: true,
      default: () => false,
    },
  },
};
</script>
