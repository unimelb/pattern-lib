<template>
  <div>
    <div
      v-for="checkbox in checkboxes"
      :key="checkbox.label">
      <AppCheckbox
        :id="checkbox.id"
        :label="checkbox.label"
        :is-checked="typeof checkbox.value === 'boolean' && checkbox.value"
        :is-indeterminate="checkbox.value === 'indeterminate'"
        :area-label="checkbox.ariaLabel"
        @change="onCheckboxChange" />
    </div>
  </div>
</template>

<script>
import AppCheckbox from '../AppCheckbox.vue';

export default {
  components: { AppCheckbox },
  data() {
    return {
      checkboxes: [
        {
          id: 'unchecked',
          value: false,
          label: 'Unchecked',
          ariaLabel: 'unchecked checkbox',
        },
        {
          id: 'checked',
          value: true,
          label: 'Checked',
          ariaLabel: 'checked checkbox',
        },
        {
          id: 'indeterminate',
          value: 'indeterminate',
          label: 'Indeterminate',
          ariaLabel: 'indeterminate checkbox',
        },
      ],
    };
  },
  methods: {
    onCheckboxChange({ id, isChecked, isIndeterminate }) {
      const checkboxToChange = this.checkboxes.find((checkbox) => checkbox.id === id);

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
