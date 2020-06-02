<template>
  <SectionTwoCol
    direction="right">
    <div slot="main">
      <FilteredResults
        :items="response.results.length"
        :filters="filtersApplied">
        <div class="grid grid--center grid--2col">
          <ListItem
            v-for="item in response.results"
            :key="item.id">
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
          </ListItem>
        </div>
      </FilteredResults>
    </div>

    <div slot="side">
      <FilterBox
        :filters="[
          {
            name: 'locations',
            filterBy: 'Locations',
            options: optionsWithQuantity.locations,
            placeholderLabel: {
              plural: 'locations',
              singular: 'location',
            },
            optionsLabel: 'Locations to include:',
          },
          {
            name: 'faculties',
            filterBy: 'Faculties',
            options: optionsWithQuantity.faculties,
            placeholderLabel: {
              plural: 'faculties',
              singular: 'faculty',
            },
            optionsLabel: 'Faculties to include: ',
          },
        ]"
        @change="onChange"
        @clear="onClear"
        @update="onUpdate" />
    </div>
  </SectionTwoCol>
</template>

<script>
import SectionTwoCol from 'components/section/SectionTwoCol.vue';
import ListItem from 'components/listing/ListItem.vue';
import GenericCard from 'components/cards/GenericCard.vue';
import FilterBox from '../filter-box/FilterBox.vue';
import FilteredResults from '../filtered-results/FilteredResults.vue';

export default {
  name: 'FilterWidget',
  components: {
    SectionTwoCol, ListItem, GenericCard, FilterBox, FilteredResults,
  },
  data() {
    return {
      filtersApplied: 1,
      response: {
        results: [],
      },
      optionsWithQuantity: {
        locations: [{
          label: 'Location 1',
          name: 'location1',
          isChecked: true,
        }],
        faculties: [{
          label: 'Faculty 1',
          name: 'faculty1',
          isChecked: true,
        }],
      },
    };
  },
  methods: {
    onChange() {
      return 1; // TODO
    },
    onClear() {
      return 1; // TODO
    },
    onUpdate() {
      return 1; // TODO
    },
  },
};
</script>
