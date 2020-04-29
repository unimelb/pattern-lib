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
import ListItem from 'components/listing/ListItem.vue';
import GenericCard from 'components/cards/GenericCard.vue';


export default {
  name: 'Default',
  components: {
    ErrorBox,
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
      options: {
        locations: [
          {
            label: 'All',
            name: 'all',
            options: [
              {
                label: 'Sydney',
                name: 'sydney',
                options: [
                  {
                    label: 'CBD',
                    name: 'cbd',
                    isChecked: true,
                  },
                  {
                    label: 'Bondi',
                    name: 'bondi',
                    isChecked: false,
                  },
                ],
              },
              {
                label: 'Melbourne',
                name: 'melbourne',
                options: [
                  {
                    label: 'Southbank',
                    name: 'southbank',
                    isChecked: false,
                  },
                  {
                    label: 'Parkville',
                    name: 'parkville',
                    isChecked: false,
                  },
                ],
              },
            ],
          },
        ],
        faculties: [
          {
            label: 'All',
            name: 'all',
            options: [
              {
                label: 'Faculty of History',
                name: 'facultyOfHistory',
                isChecked: true,
              },
              {
                label: 'Faculty of Sociology',
                name: 'facultyOfSociology',
                isChecked: false,
              },
            ],
          },
        ],
      },
      results: [],
      isDefaultFilterApplied: true,
      errors: [],
      isLoading: false,
      isFetched: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
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
        // TODO
        this.results = await this.getResults(this.options.locations);
        this.isFetched = true;
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onChange({ changedOptions }) {
      this.isLoading = true;
      this.errors = [];
      try {
        // TODO
        this.results = await this.getResults(changedOptions);
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
        // TODO
        /* this.results = await this.getResults(all);
        this.options = all;
        this.isDefaultFilterApplied = false; */
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onResetToDefaultQualification() {
      this.isLoading = true;
      this.errors = [];
      try {
        // TODO
        /* const defaultOptionsForUserQualification = defaultOptions[this.userQualification];

        this.results = await this.getResults(defaultOptionsForUserQualification);
        this.options = defaultOptionsForUserQualification;
        this.isDefaultFilterApplied = true; */
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
    async onUpdate() {
      this.isLoading = true;
      this.errors = [];
      try {
        // TODO
        // this.results = await this.getResults(this.filterDropdownOptions);
      } catch (errors) {
        this.errors = this.formatErrors(errors);
      }
      this.isLoading = false;
    },
  },
};
</script>
