<template>
  <div class="filter-results">
    <div class="filter-results__inner">
      <FilterResultsTitle
        :items="items"
        :filters="filters" />
      <div class="filter-results__content">
        <div v-if="items.length">
          <FilterResultsList
            :items="items" />
        </div>
        <div
          v-else
          class="filter-results__no-items">
          <h3>No results</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterResultsTitle from './FilterResultsTitle.vue';
import FilterResultsList from './FilterResultsList';

export default {
  components: {
    FilterResultsList,
    FilterResultsTitle,
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
  },
};
</script>
