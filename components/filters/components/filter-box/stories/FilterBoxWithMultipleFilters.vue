<template>
  <FilterBox
    :filters="[
      {
        name: 'courseTypes',
        filterBy: 'Course types',
        options: filters.courseTypes,
        placeholderLabel: {
          plural: 'course types',
          singular: 'course type',
        },
        optionsLabel: 'Course types to include:',
      },
      {
        name: 'locations',
        filterBy: 'Locations',
        options: filters.locations,
        placeholderLabel: {
          plural: 'locations',
          singular: 'location',
        },
        optionsLabel: 'Locations to include:',
      },
    ]"
    @change="onChange"
    @clear="onClear" />
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
import FilterBox from '../FilterBox.vue';
import options from '../../options.json';
import filterBox from './filter-box.md';

const defaultFilters = {
  courseTypes: options,
  locations: [
    {
      label: 'Melbourne',
      name: 'melbourne',
      isChecked: false,
    },
    {
      label: 'Sydney',
      name: 'sydney',
      isChecked: true,
    },
  ],
};

export default {
  readme: { custom: filterBox, source: false, html: false },
  name: 'FilterBoxDefault',
  components: { FilterBox },
  data() {
    return {
      filters: cloneDeep(defaultFilters),
    };
  },
  methods: {
    onChange({ name, changedOptions }) {
      this.filters[name] = changedOptions;
    },
    onClear(name) {
      if (name) {
        this.filters[name] = cloneDeep(defaultFilters[name]);
      } else {
        this.filters = cloneDeep(defaultFilters);
      }
    },
  },
};
</script>
