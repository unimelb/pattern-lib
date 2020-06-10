<template>
  <FilterWidget
    v-slot="{ item }"
    :filter-config="filterConfig"
    :filter-predicate="filterPredicate">
    <ExampleCard :item="item" />
  </FilterWidget>
</template>

<script>

import {
  filterByFaculty,
  filterByLocationAndCampus,
} from '../../../helpers/locationsAndFacultiesFilterHelpers';
import mockResults from '../../../mockData/faculties.json';
import FilterWidget from '../FilterWidget.vue';
import ExampleCard from './ExampleCard.vue';
import options from './options.json';

export default {
  name: 'FilterWidgetDefault',
  components: { FilterWidget, ExampleCard },
  data() {
    return {
      results: mockResults,
      filterConfig: [
        {
          name: 'locations',
          filterBy: 'Locations',
          options: options.locations,
          placeholderLabel: {
            plural: 'locations',
            singular: 'location',
          },
          optionsLabel: 'Locations to include:',
        },
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
    filterPredicate({ locations, faculties }) {
      const { results } = this;
      const resultsFilteredByLocation = filterByLocationAndCampus(results, locations);
      return filterByFaculty(resultsFilteredByLocation, faculties);
    },
  },
};
</script>
