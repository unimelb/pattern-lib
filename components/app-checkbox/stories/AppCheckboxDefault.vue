<template>
  <div>
    <AppCheckbox
      v-model="isSingleCheckboxChecked"
      label="Single checkbox" />

    <div>Checkboxes list:</div>
    <div
      v-for="checkbox in $options.checkboxes"
      :key="checkbox.value">
      <AppCheckbox
        v-model="checkboxesGroup"
        :label="checkbox.label"
        :name="checkbox.name" />
    </div>
  </div>
</template>

<script>
import AppCheckbox from '../AppCheckbox.vue';
import appCheckbox from './app-checkbox.md';

export default {
  readme: { custom: appCheckbox, source: false, html: false },
  name: 'AppCheckboxDefault',
  checkboxes: [
    {
      label: 'Checkbox1',
      name: 'checkbox1',
    },
    {
      label: 'Checkbox2',
      name: 'checkbox2',
    },
    {
      label: 'Checkbox3',
      name: 'checkbox3',
    },
    {
      label: 'Checkbox4',
      name: 'checkbox4',
    },

  ],
  components: { AppCheckbox },
  data() {
    return {
      isSingleCheckboxChecked: false,
      checkboxesGroup: [],
    };
  },
};
</script>
