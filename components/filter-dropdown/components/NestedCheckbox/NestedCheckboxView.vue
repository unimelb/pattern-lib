<template>
  <div>
    <div
      v-for="option in options"
      :key="option.name"
      :class="[
        'nested-checkbox',
        { 'nested-checkbox--is-first': isFirstNested },
      ]">
      <AppCheckbox
        :name="option.name"
        :area-label="option.areaLabel"
        :is-checked="option.isChecked"
        :is-indeterminate="option.isIndeterminate"
        :label="option.label"
        @change="onCheckboxChange" />

      <NestedCheckboxView
        v-if="option.options"
        :options="option.options"
        :parent-names="[...parentNames, option.name]"
        @change="$emit('change', $event)" />
    </div>
  </div>
</template>

<script>
import AppCheckbox from '../../../app-checkbox/AppCheckbox.vue';
// import optionsValidator from './optionsValidator';

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
      // validator: optionsValidator,
    },
    parentNames: {
      type: Array,
      required: true,
      validator(value) {
        return value.every((name) => !!name && typeof name === 'string');
      },
    },
  },
  computed: {
    isFirstNested() {
      return !this.parentNames.length;
    },
  },
  methods: {
    onCheckboxChange({ name, isChecked, isIndeterminate }) {
      const { parentNames } = this;

      this.$emit('change', {
        parentNames: [...parentNames, name],
        isChecked,
        isIndeterminate,
      });
    },
  },
};

</script>
