<template>
  <div>
    <div
      v-for="option in options"
      :key="option.id"
      :class="[
        'nested-checkbox',
        { 'is-first': isFirstNested },
      ]">
      <AppCheckbox
        :id="option.id"
        :area-label="option.areaLabel"
        :is-checked="option.isChecked"
        :is-indeterminate="option.isIndeterminate"
        :label="option.label"
        @change="onCheckboxChange" />

      <NestedCheckbox
        v-if="option.options"
        :options="option.options"
        :parent-ids="[...parentIds, option.id]"
        @change="onNestedCheckBoxChange" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import AppCheckbox from '../app-checkbox/AppCheckbox';
import optionsValidator from './optionsValidator';

/*
const getOptionsById = (optionsToMap) => _.keyBy(
  _.map(optionsToMap, (option) => {
    if (option.options) {
      return {
        ...option,
        options: getOptionsById(option.options),
      };
    }
    return option;
  }),
  ({ id }) => id
);
*/


export default {
  name: 'NestedCheckbox',
  components: { AppCheckbox },
  model: {
    event: 'change',
  },
  props: {
    options: {
      type: Array,
      required: true,
      validator: optionsValidator,
    },
    parentIds: {
      type: Array,
      required: true,
      validator(value) {
        return _.every(value, (id) => !!id && typeof id === 'string');
      },
    },
  },
  computed: {
    isFirstNested() {
      return !this.parentIds.length;
    },
  },
  methods: {
    onCheckboxChange({ id, isChecked, isIndeterminate }) {
      const { parentIds } = this;

      this.$emit('change', {
        parentIds: [...parentIds, id],
        isChecked,
        isIndeterminate,
      });
    },
    onNestedCheckBoxChange(payload) {
      this.$emit('change', payload);
    },
  },
};

</script>
