<template>
  <div>
    <div
      v-for="checkbox in checkboxes"
      :key="checkbox.label">
      <AppCheckbox
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
import AppCheckbox from '../AppCheckbox.vue';
import appCheckbox from './app-checkbox.md';

export default {
  readme: { custom: appCheckbox, source: false, html: true },
  components: { AppCheckbox },
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
