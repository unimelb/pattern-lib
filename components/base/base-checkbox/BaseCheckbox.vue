<template>
  <label
    :data-name="name"
    class="base-checkbox"
    @click.prevent="onClick">
    <input
      :aria-checked="isInputChecked"
      :aria-label="ariaLabel"
      :checked="isInputChecked"
      class="base-checkbox__input"
      data-testid="base-checkbox-input"
      type="checkbox">

    <span class="base-checkbox__icon">
      <span
        :class="classIconChecked"
        data-testid="base-checkbox-icon-checked" />
      <span
        :class="classIconIndeterminate"
        data-testid="base-checkbox-icon-indeterminate" />
    </span>
    <span
      v-if="!!label"
      class="base-checkbox__label"
      data-testid="base-checkbox-label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
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
        'base-checkbox__icon-checked',
        {
          'base-checkbox__icon-checked--is-checked': this.isInputChecked,
        },
      ];
    },
    classIconIndeterminate() {
      return [
        'base-checkbox__icon-indeterminate',
        {
          'base-checkbox__icon-indeterminate--is-indeterminate': this.isIndeterminate,
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
