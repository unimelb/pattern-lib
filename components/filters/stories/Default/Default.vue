<template>
  <Loader :is-loading="!isFetched && isLoading">
    <ErrorBox
      v-if="!isFetched"
      :messages="errors" />

    <SectionTwoCol
      v-else
      direction="right">
      <div slot="main">
        <LoadingOverlay
          :is-loading="isLoading"
          spinner-text="Fetching results">
          <ErrorBox
            :messages="errors" />

          <FilteredResults
            :items="results.length"
            :filters="filtersApplied">
            <div class="grid grid--center grid--2col">
              <ListItem
                v-for="item in results"
                :key="item.id">
                <GenericCard
                  :title="item.name"
                  :excerpt="item.excerpt"
                  :cols="2" />
              </ListItem>
            </div>
          </FilteredResults>
        </LoadingOverlay>
      </div>

      <div slot="side">
        <LoadingOverlay
          :is-loading="isLoading"
          :is-spinner-visible="false">
          <FilterBox
            :filters="[
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
            ]"
            @change="onChange"
            @clear="onClear"
            @update="onUpdate" />
        </LoadingOverlay>
      </div>
    </SectionTwoCol>
  </Loader>
</template>

<script>
import ErrorBox from 'components/error-box/ErrorBox.vue';
import Loader from 'components/loader/Loader.vue';
import LoadingOverlay from 'components/loader/LoadingOverlay.vue';
import SectionTwoCol from 'components/section/SectionTwoCol.vue';
import FilterBox from 'components/filters/components/filter-box/FilterBox.vue';
import FilteredResults from 'components/filters/components/filtered-results/FilteredResults.vue';
import ListItem from 'components/listing/ListItem.vue';
import GenericCard from 'components/cards/GenericCard.vue';
import getSelectedNames from '../getSelectedNames.js';
import getOptionsQuantity from '../getOptionsQuantity.js';
import formatErrors from '../formatErrors.js';
import { getFacultiesOptions, getLocationsOptions } from './getOptions.js';


export default {
  name: 'Default',
  components: {
    ErrorBox,
    SectionTwoCol,
    FilterBox,
    FilteredResults,
    ListItem,
    GenericCard,
    Loader,
    LoadingOverlay,
  },
  props: {
    fetchData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      options: {
        locations: getLocationsOptions([
          ['all', 'sydney', 'cbd'],
        ]),
        faculties: getFacultiesOptions(true),
      },
      results: [],
      isDefaultFilterApplied: true,
      errors: [],
      isLoading: false,
      isFetched: false,
    };
  },
  computed: {
    filtersApplied() {
      return this.getFiltersApplied(Object.values(this.options));
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    getFiltersApplied(optionsArray) {
      return optionsArray.reduce(
        (appliedFiltersQuantity, options) => (this.isFilterApplied(options)
          ? appliedFiltersQuantity + 1
          : appliedFiltersQuantity),
        0
      );
    },
    isFilterApplied(options) {
      const selectedOptionsLength = getSelectedNames(options).length;
      const optionsLength = getOptionsQuantity(options);

      return optionsLength !== selectedOptionsLength;
    },
    async getResults({ locations, faculties }) {
      return this.fetchData({
        locations: getSelectedNames(locations),
        faculties: getSelectedNames(faculties),
      });
    },
    async init() {
      this.isLoading = true;
      try {
        this.results = await this.getResults(this.options);
        this.isFetched = true;
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onChange({ name, changedOptions }) {
      this.isLoading = true;
      this.errors = [];
      try {
        const locationsFacultiesChangedOptions = {
          ...this.options,
          [name]: changedOptions,
        };
        this.results = await this.getResults(locationsFacultiesChangedOptions);
        this.options = locationsFacultiesChangedOptions;
        this.isDefaultFilterApplied = false;
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onClear() {
      this.isLoading = true;
      this.errors = [];
      try {
        const all = {
          locations: getLocationsOptions(true),
          faculties: getFacultiesOptions(true),
        };
        this.results = await this.getResults(all);
        this.options = all;
        this.isDefaultFilterApplied = false;
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onUpdate() {
      this.isLoading = true;
      this.errors = [];
      try {
        this.results = await this.getResults(this.options);
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
  },
};
</script>
