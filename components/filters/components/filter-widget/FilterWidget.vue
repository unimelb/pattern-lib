<template>
  <SectionTwoCol direction="right">
    <div slot="main">
      <FilteredResults
        :items="filteredResults.length"
        :filters="filtersApplied"
        :secondary-message="secondaryMessage"
        :callback="secondaryMessageCallback">
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
import getSelectedNames from '../../helpers/getSelectedNames';
import FilterBox from '../filter-box/FilterBox.vue';
import FilteredResults from '../filtered-results/FilteredResults.vue';
import getUpdatedOptions from './helpers/getUpdatedOptions';
import getFiltersApplied from './helpers/getFiltersApplied';
import trackAnalytics from '../../../../utils/trackAnalytics';

export default {
  name: 'FilterWidget',
  components: {
    SectionTwoCol,
    ListItem,
    FilterBox,
    FilteredResults,
  },
  props: {
    filterConfig: {
      type: Array,
      required: true,
    },
    filterPredicate: {
      type: Function,
      required: true,
    },
    secondaryMessage: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      updatedFilterConfig: cloneDeep(this.filterConfig),
    };
  },
  computed: {
    filterIndexByName() {
      return this.updatedFilterConfig.reduce((accumulator, { name }, filterIndex) => {
        accumulator[name] = filterIndex;

        return accumulator;
      }, {});
    },
    options() {
      return this.updatedFilterConfig.map(({ options }) => options);
    },
    selectedNames() {
      return this.updatedFilterConfig.reduce((accumulator, { name, options }) => {
        accumulator[name] = getSelectedNames(options);
        return accumulator;
      }, {});
    },
    filteredResults() {
      const { selectedNames, filterPredicate } = this;

      return filterPredicate(selectedNames);
    },
    filtersApplied() {
      return getFiltersApplied(this.options);
    },
  },
  watch: {
    filterConfig(value) {
      this.updatedFilterConfig = cloneDeep(value);
    },
  },
  methods: {
    // public
    clearFilter(name) {
      this.updateConfig(name, {
        options: this.getOptions(name, true),
      });
    },
    clearFilters() {
      this.updatedFilterConfig = this.updatedFilterConfig.map((filter) => ({
        ...filter,
        options: this.getOptions(filter.name, true),
      }));
    },
    // eventHandlers
    onChange({ name, changedOptions }) {
      this.updateConfig(name, {
        options: changedOptions,
      });

      // track filter analytics
      const userSelection = this.selectedNames[name];
      const userAnalytics = [];

      userSelection.forEach((selection) => {
        userAnalytics.push(selection.join('_'));
      });

      trackAnalytics(name, 'Selection', userAnalytics);
    },
    onClear(nameOrNull) {
      if (nameOrNull) {
        this.clearFilter(nameOrNull);
      } else {
        this.clearFilters();
      }
    },
    onUpdate() {
      this.$emit('update', this.updatedFilterConfig);
    },
    secondaryMessageCallback() {
      this.$emit('secondaryMessageClicked');
    },
    // helpers
    updateConfig(name, partialFilterConfig) {
      const { config, index } = this.getConfigAndIndex(name);

      this.$set(this.updatedFilterConfig, index, {
        ...config,
        ...partialFilterConfig,
      });
    },
    getOptions(name, isChecked = false) {
      const { config: { options } } = this.getConfigAndIndex(name);

      return getUpdatedOptions(options, isChecked);
    },
    getConfigAndIndex(name) {
      const index = this.filterIndexByName[name];
      const config = this.updatedFilterConfig[index];

      return {
        config,
        index,
      };
    },
  },
};
</script>
