<template>
  <label
    :data-name="name"
    :class="classRoot"
    :tabindex="tabIndex"
    :aria-label="ariaLabel"
    @focus="onRootFocus"
    @blur="onRootBlur"
    @click.prevent="toggleHandler"
    @keypress.space.prevent="toggleHandler">
    <input
      :checked="isInputChecked"
      class="base-checkbox__input"
      data-testid="base-checkbox-input"
      type="checkbox">

    <span :class="classIcon">
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
const displayProp = {
  inline: 'inline',
  block: 'block',
};

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
    display: {
      type: String,
      default: displayProp.inline,
      validator(value) {
        return Object.values(displayProp).includes(value);
      },
    },
    tabIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isFocused: false,
    };
  },
  computed: {
    isInputChecked() {
      return !this.isIndeterminate && this.isChecked;
    },
    classRoot() {
      return [
        'base-checkbox',
        `base-checkbox--${this.display}`,
      ];
    },
    classIcon() {
      return [
        'base-checkbox__icon',
        {
          'base-checkbox__icon--is-focused': this.isFocused,
        },
      ];
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
    toggleHandler() {
      const { name, isChecked, isIndeterminate } = this;

      // Current values emited
      this.$emit('change', {
        name,
        isChecked,
        isIndeterminate,
      });
    },
    onRootFocus() {
      this.isFocused = true;
    },
    onRootBlur() {
      this.isFocused = false;
    },
  },
};
</script>
