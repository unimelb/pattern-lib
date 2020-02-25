<template>
  <div class="filtered-results">
    <div class="filtered-results__inner">
      <FilteredResultsTitle
        :items="items"
        :filters="filters" />
      <div class="filtered-results__content">
        <div v-if="items.length">
          <FilteredResultsList
            :items="items" />
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
import FilteredResultsList from './FilteredResultsList';

export default {
  components: {
    FilteredResultsList,
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
  },
  created() {
    this.$on('change:filters', this.changeCategory);
  },
  methods: {
    changeCategory(value) {
      console.log(value);
    },
  },
};
</script>
