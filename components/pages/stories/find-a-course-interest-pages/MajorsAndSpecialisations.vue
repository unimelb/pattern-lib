<template>
  <Loader :is-loading="!isFetched && isLoading">
    <ErrorBox
      v-if="!isFetched"
      :messages="errors" />

    <SectionTwoCol
      v-else
      direction="right">
      <div slot="main">
        <div>
          {{ results.length }} results found with 0 filters applied.
          <a
            v-if="defaultFiltersApplied"
            href="#"
            @click.prevent="onClickWhenDefaultApplied">{{ messageDefaultFilters }}</a>
          <a
            v-else
            href="#"
            @click.prevent="onClickWhenCustomApplied">{{ messageCustomFilters }}</a>
        </div>

        <hr>

        <LoadingOverlay
          :is-loading="isLoading"
          spinner-text="Fetching results">
          <ErrorBox
            :messages="errors" />

          <div class="grid grid--2col">
            <ListItem
              v-for="(result, resultIndex) in results"
              :key="resultIndex">
              <GenericCard
                :cols="2"
                :title="result.name" />
            </ListItem>
          </div>
        </LoadingOverlay>
      </div>

      <div slot="side">
        <FilterBox
          :disabled="isLoading"
          :options="filterDropdownOptions"
          filter-by="Course types"
          placeholder-label="course types"
          options-label="Course types to include:"
          @change="onChange"
          @clear="onClear" />
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
import ListItem from '../../../listing/ListItem.vue';
import GenericCard from '../../../cards/GenericCard.vue';
import getResults from './mockResults.js';
import undergrad from './defaultOptions/undergrad.json';
import postgrad from './defaultOptions/postgrad.json';
import research from './defaultOptions/research.json';

const defaultOptions = {
  undergrad,
  postgrad,
  research,
};

const defaultLabels = {
  undergrad: 'undergraduate study',
  postgrad: 'graduate study',
  research: 'research study',
};

export default {
  name: 'MajorsAndSpecialisations',
  components: {
    ErrorBox, SectionTwoCol, FilterBox, ListItem, GenericCard, Loader, LoadingOverlay,
  },
  data() {
    return {
      userQualification: 'undergrad',
      filterDropdownOptions: defaultOptions.undergrad,
      defaultFiltersApplied: true,
      results: [],
      errors: [],
      isLoading: false,
      isFetched: false,
    };
  },
  computed: {
    messageDefaultFilters() {
      const qual = defaultLabels[this.userQualification];
      return `Filters applied to show you ${qual} options (change)`;
    },
    messageCustomFilters() {
      const qual = defaultLabels[this.userQualification];
      return `Apply filters to show you ${qual} options?`;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    onClickWhenDefaultApplied() {
      // TODO
    },
    onClickWhenCustomApplied() {
      // TODO
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
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
    async onClear() {
      this.isLoading = true;
      try {
        const defaultOptionsForUserQual = defaultOptions[this.userQualification];

        this.results = await getResults(defaultOptionsForUserQual);
        this.filterDropdownOptions = defaultOptionsForUserQual;
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
  },
};
</script>
