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
            :filters="filtersApplied"
            :secondary-message="secondaryMessage"
            :callback="segmentationChange">
            <div class="grid grid--center grid--2col">
              <ListItem
                v-for="item in response.results"
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
import ErrorBox from 'components/error-box/ErrorBox.vue';
import Loader from 'components/loader/Loader.vue';
import LoadingOverlay from 'components/loader/LoadingOverlay.vue';
import SectionTwoCol from 'components/section/SectionTwoCol.vue';
import FilterBox from 'components/filters/filter-box/FilterBox.vue';
import FilteredResults from 'components/filters/filtered-results/FilteredResults.vue';
import ListItem from 'components/listing/ListItem.vue';
import GenericCard from 'components/cards/GenericCard.vue';
import undergrad from '../defaultOptions/undergrad.json';
import postgrad from '../defaultOptions/postgrad.json';
import research from '../defaultOptions/research.json';
import all from '../defaultOptions/all.json';

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
  props: {
    fetchData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      userQualification: 'undergrad',
      options: defaultOptions.undergrad,
      response: {
        results: [],
        quantity: {},
      },
      isDefaultFilterApplied: true,
      errors: [],
      isLoading: false,
      isFetched: false,
    };
  },
  computed: {
    filterDropdownOptions() {
      const { options, response: { quantity } } = this;

      return this.getFilterDropdownOptions(options, quantity);
    },
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
      return this.getSelectedNames(this.filterDropdownOptions).length;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    getFilterDropdownOptions(options, quantity) {
      return options.map((option) => {
        const { name, label } = option;

        const currentOptionQuantityConfig = quantity[name] || 0;

        const currentOptionQuantity = typeof currentOptionQuantityConfig === 'number'
          ? currentOptionQuantityConfig
          : currentOptionQuantityConfig.quantity;

        const newLabel = `${label.replace(/ \([0-9]+\)$/g, '')} (${currentOptionQuantity})`;

        if (option.options && option.options.length) {
          return {
            ...option,
            label: newLabel,
            options: this.getFilterDropdownOptions(
              option.options,
              currentOptionQuantityConfig
            ),
          };
        }
        return {
          ...option,
          label: newLabel,
        };
      });
    },
    getSelectedNames(options, parentNames = []) {
      return options.reduce((selectedNames, option) => {
        if (option.options && option.options.length) {
          const nestedSelectedOptions = this.getSelectedNames(
            option.options,
            [...parentNames, option.name]
          );
          return selectedNames.concat(nestedSelectedOptions);
        }

        if (option.isChecked) {
          selectedNames.push([...parentNames, option.name]);
        }

        return selectedNames;
      }, []);
    },
    segmentationChange() {
      if (this.isDefaultFilterApplied) {
        // TODO
      } else {
        this.onResetToDefaultQualification();
      }
    },
    async getResults(options) {
      return this.fetchData(
        this.getSelectedNames(options)
      );
    },
    formatErrors(error) {
      return [error.toString()];
    },
    async init() {
      this.isLoading = true;
      try {
        this.response = await this.getResults(this.filterDropdownOptions);
        this.isFetched = true;
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onChange(changedOptions) {
      this.isLoading = true;
      this.errors = [];
      try {
        this.response = await this.getResults(changedOptions);
        this.options = changedOptions;
        this.isDefaultFilterApplied = false;
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onClear() {
      this.isLoading = true;
      this.errors = [];
      try {
        this.response = await this.getResults(all);
        this.options = all;
        this.isDefaultFilterApplied = false;
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onResetToDefaultQualification() {
      this.isLoading = true;
      this.errors = [];
      try {
        const defaultOptionsForUserQualification = defaultOptions[this.userQualification];

        this.response = await this.getResults(defaultOptionsForUserQualification);
        this.options = defaultOptionsForUserQualification;
        this.isDefaultFilterApplied = true;
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onUpdate() {
      this.isLoading = true;
      this.errors = [];
      try {
        this.response = await this.getResults(this.filterDropdownOptions);
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
  },
};
</script>
