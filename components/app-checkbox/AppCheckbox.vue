<template>
  <label
    :class="[
      'app-checkbox',
      { 'is-checked': isInputChecked },
      { 'is-indeterminate': isIndeterminate },
    ]"
    @click.prevent="onClick">
    <input
      type="checkbox"
      class="app-checkbox__input"
      :checked="isInputChecked"
      :aria-checked="isInputChecked"
      :aria-label="areaLabel">

    <span class="app-checkbox__icon">
      <span class="app-checkbox__icon-checked" />
      <span class="app-checkbox__icon-indeterminate" />
    </span>
    <span
      v-if="!!label"
      class="app-checkbox__label">{{ label }}</span>
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
    areaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    isInputChecked() {
      return !this.isIndeterminate && this.isChecked;
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
