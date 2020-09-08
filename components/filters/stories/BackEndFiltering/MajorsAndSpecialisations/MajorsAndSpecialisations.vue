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
                  href="#"
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
                name: 'courseTypes',
                filterBy: 'Course types',
                options: filterDropdownOptions,
                placeholderLabel: {
                  plural: 'course types',
                  singular: 'course type',
                },
                optionsLabel: 'Course types to include:',
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
import getSelectedNames from '../../../helpers/getSelectedNames';
import getOptionsQuantity from '../../../helpers/getOptionsQuantity';
import addQuantityToOptions from '../helpers/addQuantityToOptions';
import formatErrors from '../helpers/formatErrors';
import getOptions from './helpers/getOptions';

const defaultLabels = {
  undergrad: 'undergraduate study',
  postgrad: 'graduate study',
  research: 'research study',
};

const all = getOptions(true);

const defaultOptions = {
  undergrad: getOptions([
    ['all', 'undergrad', 'bachelor'],
    ['all', 'undergrad', 'diploma'],
    ['all', 'undergrad', 'honours'],
  ]),
  postgrad: getOptions([
    ['all', 'postgrad', 'certificate'],
    ['all', 'postgrad', 'diploma'],
    ['all', 'postgrad', 'master'],
  ]),
  research: getOptions([
    ['all', 'research', 'master'],
    ['all', 'research', 'phd'],
  ]),
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

      return addQuantityToOptions(options, quantity);
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
      const selectedQuantity = getSelectedNames(this.filterDropdownOptions).length;
      const allQuantity = getOptionsQuantity(this.filterDropdownOptions);

      const filtersNotAppliedQuantity = 0;
      return allQuantity === selectedQuantity ? filtersNotAppliedQuantity : selectedQuantity;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    segmentationChange() {
      if (this.isDefaultFilterApplied) {
        // TODO
      } else {
        this.onResetToDefaultQualification();
      }
    },
    async getResults(options) {
      return this.fetchData(
        getSelectedNames(options)
      );
    },
    async init() {
      this.isLoading = true;
      try {
        this.response = await this.getResults(this.filterDropdownOptions);
        this.isFetched = true;
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onChange({ changedOptions }) {
      this.isLoading = true;
      this.errors = [];
      try {
        this.response = await this.getResults(changedOptions);
        this.options = changedOptions;
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
        this.response = await this.getResults(all);
        this.options = all;
        this.isDefaultFilterApplied = false;
      } catch (errors) {
        this.errors = formatErrors(errors);
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
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onUpdate() {
      this.isLoading = true;
      this.errors = [];
      try {
        this.response = await this.getResults(this.filterDropdownOptions);
      } catch (errors) {
        this.errors = formatErrors(errors);
      }
      this.isLoading = false;
    },
  },
};
</script>
