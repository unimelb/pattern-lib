<template>
  <div>
    <div
      v-for="option in options"
      :key="option.name"
      :class="[
        'nested-checkbox',
        { 'nested-checkbox--is-first': isFirstNested },
      ]">
      <BaseCheckbox
        class="nested-checkbox__checkbox"
        :name="option.name"
        :aria-label="option.ariaLabel"
        :is-checked="option.isChecked"
        :is-indeterminate="option.isIndeterminate"
        :label="option.label"
        display="block"
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
import BaseCheckbox from '../../../../base/base-checkbox/BaseCheckbox.vue';

export default {
  name: 'NestedCheckboxView',
  components: { BaseCheckbox },
  model: {
    event: 'change',
  },
  props: {
    options: {
      type: Array,
      required: true,
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
