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
          40 results found with 0 filters applied. Apply default filters for Domestic undergraduate?
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
          :options="filterDropdownOptions"
          filter-by="Course types"
          placeholder-label="course types"
          options-label="Course types to include:" />
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
import filterDropdownOptions from '../../../filters/filter-dropdown/stories/options';
import ListItem from '../../../listing/ListItem.vue';
import GenericCard from '../../../cards/GenericCard.vue';
import getResults from './mockResults.js';

export default {
  name: 'MajorsAndSpecialisations',
  components: {
    ErrorBox, SectionTwoCol, FilterBox, ListItem, GenericCard, Loader, LoadingOverlay,
  },
  data() {
    return {
      filterDropdownOptions,
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
    onChange(changedOptions) {
      this.filterDropdownOptions = changedOptions;
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
  },
};
</script>
