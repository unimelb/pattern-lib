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
import getSelectedNames from '../../helpers/getSelectedNames';
import FilterBox from '../filter-box/FilterBox.vue';
import FilteredResults from '../filtered-results/FilteredResults.vue';
import getUpdatedOptions from './helpers/getUpdatedOptions';
import getFiltersApplied from './helpers/getFiltersApplied';

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
  methods: {
    // eventHandlers
    onChange({ name, changedOptions }) {
      this.updateConfig(name, {
        options: changedOptions,
      });
    },
    onClear(nameOrNull) {
      if (nameOrNull) {
        this.updateConfig(nameOrNull, {
          options: this.getOptions(nameOrNull, true),
        });
      } else {
        this.updatedFilterConfig = this.updatedFilterConfig.map((filter) => ({
          ...filter,
          options: this.getOptions(filter.name, true),
        }));
      }
    },
    onUpdate() {
      this.$emit('update', this.updatedFilterConfig);
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
