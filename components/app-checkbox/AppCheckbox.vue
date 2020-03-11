<template>
  <label
    :data-name="name"
    class="app-checkbox"
    @click.prevent="onClick">
    <input
      :aria-checked="isInputChecked"
      :aria-label="ariaLabel"
      :checked="isInputChecked"
      class="app-checkbox__input"
      data-testid="app-checkbox-input"
      type="checkbox">

    <span class="app-checkbox__icon">
      <span
        :class="classIconChecked"
        data-testid="app-checkbox-icon-checked" />
      <span
        :class="classIconIndeterminate"
        data-testid="app-checkbox-icon-indeterminate" />
    </span>
    <span
      v-if="!!label"
      class="app-checkbox__label"
      data-testid="app-checkbox-label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'AppCheckbox',
  model: {
    event: 'change',
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    isIndeterminate: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    isInputChecked() {
      return !this.isIndeterminate && this.isChecked;
    },
    classIconChecked() {
      return [
        'app-checkbox__icon-checked',
        {
          'app-checkbox__icon-checked--is-checked': this.isInputChecked,
        },
      ];
    },
    classIconIndeterminate() {
      return [
        'app-checkbox__icon-indeterminate',
        {
          'app-checkbox__icon-indeterminate--is-indeterminate': this.isIndeterminate,
        },
      ];
    },
  },
  methods: {
    onClick() {
      const { name, isChecked, isIndeterminate } = this;

      // Current values emited
      this.$emit('change', {
        name,
        isChecked,
        isIndeterminate,
      });
    },
  },
};
</script>
