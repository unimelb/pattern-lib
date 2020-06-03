<template>
  <FilterWidget
    v-slot="{ item }"
    :data="results"
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
import FilterWidget from '../FilterWidget.vue';
import mockResults from './mockResults.json';
import options from './options.json';

const facultyLabels = {
  facultyOfHistory: 'Faculty of History',
  facultyOfSociology: 'Faculty of Sociology',
  facultyOfArt: 'Faculty of Art',
};

const cityLabels = {
  sydney: 'Sydney',
  melbourne: 'Melbourne',
  goldCoast: 'Gold coast',
};

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
    filterPredicate(data, { locations, faculties }) {
      const resultsFilteredByLocation = filterByLocationAndCampus(data, locations);
      return filterByFaculty(resultsFilteredByLocation, faculties);
    },
  },
};

// TODO remove duplications
function filterByLocationAndCampus(allResults, locations) {
  const resultsWithDuplicates = [];
  locations.forEach(([, city, campus]) => {
    const cityLabel = cityLabels[city];

    const foundResults = mockResults.filter((result) => {
      const foundCity = result.city.find((resultCity) => resultCity.name === cityLabel);

      return foundCity && foundCity.campus.includes(campus);
    });

    resultsWithDuplicates.push(...foundResults);
  });

  // remove duplicates and return
  return resultsWithDuplicates.reduce(
    (uniqueResults, resultToBeAdded) => (uniqueResults.some((uniqueResult) => uniqueResult.id === resultToBeAdded.id)
      ? uniqueResults
      : [...uniqueResults, resultToBeAdded]),
    []
  );
}

// TODO remove duplications
function filterByFaculty(allResults, faculties) {
  const selectedFacultyLabels = faculties.map(([, faculty]) => facultyLabels[faculty]);

  return allResults.filter((result) => selectedFacultyLabels.includes(result.faculty));
}
</script>
