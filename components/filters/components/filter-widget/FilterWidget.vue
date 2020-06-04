<template>
  <SectionTwoCol direction="right">
    <div slot="main">
      <FilteredResults
        :items="filteredResults.length"
        :filters="filtersApplied">
        <div class="grid grid--center grid--2col">
          <ListItem
            v-for="item in filteredResults"
            :key="item.id">
            <slot :item="item" />
          </ListItem>
        </div>
      </FilteredResults>
    </div>

    <div slot="side">
      <FilterBox
        :filters="updatedFilterConfig"
        @change="onChange"
        @clear="onClear"
        @update="onUpdate" />
    </div>
  </SectionTwoCol>
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
import SectionTwoCol from 'components/section/SectionTwoCol.vue';
import ListItem from 'components/listing/ListItem.vue';
import FilterBox from '../filter-box/FilterBox.vue';
import FilteredResults from '../filtered-results/FilteredResults.vue';
import getSelectedNames from '../../stories/BackEndFiltering/getSelectedNames';
import getOptionsQuantity from '../../stories/BackEndFiltering/getOptionsQuantity';

export default {
  name: 'FilterWidget',
  components: {
    SectionTwoCol,
    ListItem,
    FilterBox,
    FilteredResults,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    filterConfig: {
      type: Array,
      required: true,
    },
    filterPredicate: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      updatedFilterConfig: cloneDeep(this.filterConfig),
    };
  },
  computed: {
    filteredResults() {
      const { data, updatedFilterConfig, filterPredicate } = this;

      const selectedNames = updatedFilterConfig.reduce((accumulator, { name, options }) => {
        accumulator[name] = getSelectedNames(options);
        return accumulator;
      }, {});

      return filterPredicate(data, selectedNames);
    },
    filterIndexByName() {
      return this.filterConfig.reduce((accumulator, { name }, filterIndex) => {
        accumulator[name] = filterIndex;

        return accumulator;
      }, {});
    },
    options() {
      return this.filterConfig.map(({ options }) => options);
    },
    filtersApplied() {
      return this.getFiltersApplied(this.options);
    },
  },
  created() {
    console.clear(); // TODO remove this when the component is finished
  },
  methods: {
    onChange({ name, changedOptions }) {
      const filterIndex = this.filterIndexByName[name];
      const filterConfigToUpdate = this.updatedFilterConfig[filterIndex];

      this.$set(this.updatedFilterConfig, filterIndex, {
        ...filterConfigToUpdate,
        options: changedOptions,
      });
    },
    onClear(nameOrNull) {
      if (nameOrNull) {
        const filterIndex = this.filterIndexByName[nameOrNull];
        const filterConfigToUpdate = this.updatedFilterConfig[filterIndex];

        this.$set(this.updatedFilterConfig, filterIndex, {
          ...filterConfigToUpdate,
          options: this.getOptions(nameOrNull, true),
        });
      } else {
        this.updatedFilterConfig = this.updatedFilterConfig.map((filter) => ({
          ...filter,
          options: this.getOptions(filter.name, true),
        }));
      }
    },
    getOptions(name/* , isChecked = false */) {
      const filterIndex = this.filterIndexByName[name];
      const { options } = this.updatedFilterConfig[filterIndex];

      return options; // TODO
    },
    onUpdate() {
      console.log('onUpdate'); // TODO discuss
    },
    getFiltersApplied(optionsArray) {
      const initialFiltersApplied = 0;
      return optionsArray.reduce(
        (appliedFiltersQuantity, options) => (this.isFilterApplied(options) ? appliedFiltersQuantity + 1 : appliedFiltersQuantity),
        initialFiltersApplied
      );
    },
    isFilterApplied(options) {
      const selectedOptionsLength = getSelectedNames(options).length;
      const optionsLength = getOptionsQuantity(options);

      return optionsLength !== selectedOptionsLength;
    },
  },
};
</script>
