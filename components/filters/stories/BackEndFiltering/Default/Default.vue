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
import getOptions from './getOptions.js';
import addQuantityToOptions from '../addQuantityToOptions';

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
        locations: getOptions('locations', [
          ['all', 'sydney', 'cbd'],
        ]),
        faculties: getOptions('faculties', true),
      },
      response: {
        results: [],
        quantity: {
          locations: {},
          faculties: {},
        },
      },
      errors: [],
      isLoading: false,
      isFetched: false,
    };
  },
  computed: {
    filtersApplied() {
      return this.getFiltersApplied(Object.values(this.options));
    },
    optionsWithQuantity() {
      const {
        options,
        response: {
          quantity,
        },
      } = this;

      return {
        locations: addQuantityToOptions(options.locations, quantity.locations),
        faculties: addQuantityToOptions(options.faculties, quantity.faculties),
      };
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
        this.response = await this.getResults(this.options);
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
        this.response = await this.getResults(locationsFacultiesChangedOptions);
        this.options = locationsFacultiesChangedOptions;
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onClear(nameOrNull) {
      this.isLoading = true;
      this.errors = [];
      try {
        const updatedOptions = !nameOrNull
          ? {
            locations: getOptions('locations', true),
            faculties: getOptions('faculties', true),
          } : {
            ...this.options,
            [nameOrNull]: getOptions(nameOrNull, true),
          };

        this.response = await this.getResults(updatedOptions);
        this.options = updatedOptions;
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onUpdate() {
      this.isLoading = true;
      this.errors = [];
      try {
        this.response = await this.getResults(this.options);
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
  },
};
</script>
