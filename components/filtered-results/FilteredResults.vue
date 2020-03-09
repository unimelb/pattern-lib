<template>
  <div class="filtered-results">
    <div class="filtered-results__inner">
      <FilteredResultsTitle
        :items="items"
        :filters="filters"
        :secondary-message="secondaryMessage"
        :callback="callback" />
      <div class="filtered-results__content">
        <div
          v-if="items > 0"
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
      type: Number,
      default: () => 0,
      required: true,
    },
    filters: {
      type: Number,
      default: () => 0,
      required: true,
    },
    secondaryMessage: {
      type: String,
      default: () => '',
      required: false,
    },
    callback: {
      type: Function,
      default: () => false,
      required: false,
    },
  },
};
</script>
