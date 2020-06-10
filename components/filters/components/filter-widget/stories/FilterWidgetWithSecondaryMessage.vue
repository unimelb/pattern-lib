<template>
  <FilterWidget
    ref="filterWidget"
    v-slot="{ item }"
    :filter-config="filterConfig"
    :filter-predicate="filterPredicate"
    secondary-message="Clear filters"
    @secondaryMessageClicked="onSecondaryMessageClick">
    <ExampleCard :item="item" />
  </FilterWidget>
</template>

<script>
import { filterByFaculty } from '../../../helpers/locationsAndFacultiesFilterHelpers';
import mockResults from '../../../mockData/faculties.json';
import FilterWidget from '../FilterWidget.vue';
import ExampleCard from './ExampleCard.vue';
import options from './options.json';

export default {
  name: 'FilterWidgetWithSecondaryMessage',
  components: { FilterWidget, ExampleCard },
  data() {
    return {
      results: mockResults,
      filterConfig: [
        {
          name: 'faculties',
          filterBy: 'Faculties',
          options: options.faculties,
          placeholderLabel: {
            plural: 'faculties',
            singular: 'faculty',
          },
          optionsLabel: 'Faculties to include: ',
        },
      ],
    };
  },
  methods: {
    filterPredicate({ faculties }) {
      const { results } = this;
      return filterByFaculty(results, faculties);
    },
    onSecondaryMessageClick() {
      this.$refs.filterWidget.clearFilters();
    },
  },
};
</script>
