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
          <SegmentationNotice
            :options="filterDropdownOptions"
            :is-default-filter-applied="isDefaultFilterApplied"
            :results-length="results.length"
            :user-qualification="userQualification"
            @clear="onClear"
            @change="segmentationChange" />

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
        <LoadingOverlay
          :is-loading="isLoading"
          :is-spinner-visible="false">
          <FilterBox
            :is-clear-disabled="isDefaultFilterApplied"
            :options="filterDropdownOptions"
            filter-by="Course types"
            placeholder-label="course types"
            options-label="Course types to include:"
            @change="onChange"
            @clear="onClear" />
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
import SegmentationNotice from '../../../filters/segmentation-notice/SegmentationNotice.vue';
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

export default {
  name: 'MajorsAndSpecialisations',
  components: {
    ErrorBox,
    SegmentationNotice,
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
  mounted() {
    this.init();
  },
  methods: {
    segmentationChange() {
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
        this.isDefaultFilterApplied = false;
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
        this.isDefaultFilterApplied = true;
      } catch (errors) {
        this.errors = errors;
      }
      this.isLoading = false;
    },
  },
};
</script>
