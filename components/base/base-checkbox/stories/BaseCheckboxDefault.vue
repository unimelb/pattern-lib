<template>
  <div>
    <div
      v-for="checkbox in checkboxes"
      :key="checkbox.label">
      <BaseCheckbox
        :name="checkbox.name"
        :label="checkbox.label"
        :is-checked="typeof checkbox.value === 'boolean' && checkbox.value"
        :is-indeterminate="checkbox.value === 'indeterminate'"
        :aria-label="checkbox.ariaLabel"
        @change="onCheckboxChange" />
    </div>
  </div>
</template>

<script>
import BaseCheckbox from '../BaseCheckbox.vue';
import baseCheckbox from './base-checkbox.md';

export default {
  readme: { custom: baseCheckbox, source: false, html: true },
  components: { BaseCheckbox },
  data() {
    return {
      checkboxes: [
        {
          name: 'unchecked',
          value: false,
          label: 'Unchecked',
          ariaLabel: 'unchecked checkbox',
        },
        {
          name: 'checked',
          value: true,
          label: 'Checked',
          ariaLabel: 'checked checkbox',
        },
        {
          name: 'indeterminate',
          value: 'indeterminate',
          label: 'Indeterminate',
          ariaLabel: 'indeterminate checkbox',
        },
      ],
    };
  },
  methods: {
    onCheckboxChange({ name, isChecked, isIndeterminate }) {
      const checkboxToChange = this.checkboxes.find((checkbox) => checkbox.name === name);

      if (checkboxToChange) {
        if (isChecked) {
          checkboxToChange.value = 'indeterminate';
        } else if (isIndeterminate) {
          checkboxToChange.value = false;
        } else {
          checkboxToChange.value = true;
        }
      }
    },
  },
};
</script>
