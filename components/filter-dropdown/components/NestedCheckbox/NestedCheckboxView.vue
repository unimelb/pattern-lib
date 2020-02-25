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

      <NestedCheckboxView
        v-if="option.options"
        :options="option.options"
        :parent-ids="[...parentIds, option.id]"
        @change="$emit('change', $event)" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import AppCheckbox from '../../../app-checkbox/AppCheckbox';
import optionsValidator from './optionsValidator';

export default {
  name: 'NestedCheckboxView',
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
  },
};

</script>
