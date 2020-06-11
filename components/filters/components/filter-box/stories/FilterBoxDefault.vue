<template>
  <FilterBox
    :filters="[
      {
        name: 'courseTypes',
        filterBy: 'Course types',
        options: options,
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
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
import FilterBox from '../FilterBox.vue';
import options from '../../options.json';
import filterBox from './filter-box.md';

export default {
  readme: { custom: filterBox, source: false, html: false },
  name: 'FilterBoxDefault',
  components: { FilterBox },
  data() {
    return {
      options,
    };
  },
  methods: {
    onChange({ changedOptions }) {
      this.options = changedOptions;
    },
    onClear() {
      this.options = cloneDeep(options);
    },
    onUpdate() {
      //
    },
  },
};
</script>
