<template>
  <FilterWidget
    v-slot="{ item }"
    :filter-config="filterConfig"
    :filter-predicate="filterPredicate">
    <GenericCard
      :title="item.name"
      :excerpt="item.description"
      :cols="2">
      <div
        slot="sub-title-1"
        class="sub-title">
        <div>
          <div
            v-for="(location, locationIndex) in item.city"
            :key="locationIndex">
            <strong>Location city:</strong> {{ location.name }}
            <br>
            <strong>Campus:</strong> {{ location.campus.join(' / ') }}
            <br>
            <br>
          </div>
        </div>
      </div>
      <div
        slot="sub-title-2"
        class="sub-title">
        <span>{{ item.faculty }}</span>
      </div>
    </GenericCard>
  </FilterWidget>
</template>

<script>
import GenericCard from 'components/cards/GenericCard.vue';
import {
  filterByFaculty,
  filterByLocationAndCampus,
} from '../../../helpers/locationsAndFacultiesFilterHelpers';
import mockResults from '../../../mockData/faculties.json';
import FilterWidget from '../FilterWidget.vue';
import options from './options.json';

export default {
  name: 'FilterWidgetDefault',
  components: { FilterWidget, GenericCard },
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
