<template>
  <FilterWidget
    ref="filterWidget"
    v-slot="{ item }"
    :filter-config="filterConfig"
    :filter-predicate="filterPredicate"
    secondary-message="Clear filters"
    @secondaryMessageClicked="onSecondaryMessageClick">
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
import { filterByFaculty } from '../../../helpers/locationsAndFacultiesFilterHelpers';
import mockResults from '../../../mockData/faculties.json';
import FilterWidget from '../FilterWidget.vue';
import options from './options.json';

export default {
  name: 'FilterWidgetWithSecondaryMessage',
  components: { FilterWidget, GenericCard },
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
