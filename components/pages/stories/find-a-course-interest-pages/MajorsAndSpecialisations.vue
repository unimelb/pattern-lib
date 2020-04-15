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
            :filters="filtersApplied"
            :secondary-message="secondaryMessage"
            :callback="segmentationChange">
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
            :options="filterDropdownOptions"
            filter-by="Course types"
            placeholder-label="course types"
            options-label="Course types to include:"
            @change="onChange"
            @clear="onClear"
            @update="onUpdate" />
        </LoadingOverlay>
      </div>
    </SectionTwoCol>
  </Loader>
</template>

<script>
import Loader from '../../../loader/Loader.vue';
import ErrorBox from '../../../error-box/ErrorBox.vue';
import LoadingOverlay from '../../../loader/LoadingOverlay.vue';
import SectionTwoCol from '../../../section/SectionTwoCol.vue';
import FilterBox from '../../../filters/filter-box/FilterBox.vue';
import FilteredResults from '../../../filters/filtered-results/FilteredResults.vue';
import ListItem from '../../../listing/ListItem.vue';
import GenericCard from '../../../cards/GenericCard.vue';
import getResults from './mockResults.js';
import undergrad from './defaultOptions/undergrad.json';
import postgrad from './defaultOptions/postgrad.json';
import research from './defaultOptions/research.json';
import all from './defaultOptions/all.json';

const defaultLabels = {
  undergrad: 'undergraduate study',
  postgrad: 'graduate study',
  research: 'research study',
};

const defaultOptions = {
  undergrad,
  postgrad,
  research,
};

export default {
  name: 'MajorsAndSpecialisations',
  components: {
    ErrorBox,
    FilteredResults,
    SectionTwoCol,
    FilterBox,
    ListItem,
    GenericCard,
    Loader,
    LoadingOverlay,
  },
  data() {
    return {
      userQualification: 'undergrad',
      filterDropdownOptions: defaultOptions.undergrad,
      isDefaultFilterApplied: true,
      results: [],
      errors: [],
      isLoading: false,
      isFetched: false,
    };
  },
  computed: {
    messageDefaultFilters() {
      const qualificationLabel = defaultLabels[this.userQualification];
      return `Filters applied to show you ${qualificationLabel} options (change)`;
    },
    messageCustomFilters() {
      const qualificationLabel = defaultLabels[this.userQualification];
      return `Apply filters to show you ${qualificationLabel} options?`;
    },
    secondaryMessage() {
      return this.isDefaultFilterApplied
        ? this.messageDefaultFilters
        : this.messageCustomFilters;
    },
    filtersApplied() {
      return this.getSelectedOptionLabels(this.filterDropdownOptions).length;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    getSelectedOptionLabels(options) {
      return options.reduce((selectedLabels, option) => {
        if (option.options && option.options.length) {
          const nestedSelectedOptions = this.getSelectedOptionLabels(option.options);
          return selectedLabels.concat(nestedSelectedOptions);
        }

        if (option.isChecked) {
          selectedLabels.push(option.label);
        }

        return selectedLabels;
      }, []);
    },
    segmentationChange() {
      if (this.isDefaultFilterApplied) {
        // TODO
      } else {
        this.onResetToDefaultQualification();
      }
    },
    async init() {
      this.isLoading = true;
      try {
        this.results = await getResults(this.filterDropdownOptions);
        this.isFetched = true;
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
    async onChange(changedOptions) {
      this.isLoading = true;
      try {
        this.results = await getResults(changedOptions);
        this.filterDropdownOptions = changedOptions;
        this.isDefaultFilterApplied = false;
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
    async onClear() {
      this.isLoading = true;
      try {
        this.results = await getResults(all);
        this.filterDropdownOptions = all;
        this.isDefaultFilterApplied = false;
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
    async onResetToDefaultQualification() {
      this.isLoading = true;
      try {
        const defaultOptionsForUserQualification = defaultOptions[this.userQualification];

        this.results = await getResults(defaultOptionsForUserQualification);
        this.filterDropdownOptions = defaultOptionsForUserQualification;
        this.isDefaultFilterApplied = true;
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
    async onUpdate() {
      this.isLoading = true;
      try {
        this.results = await getResults(this.filterDropdownOptions);
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
  },
};
</script>
