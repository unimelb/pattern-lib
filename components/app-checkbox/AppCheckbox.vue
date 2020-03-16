<template>
  <BaseCheckbox
    :aria-label="ariaLabel"
    :is-checked="shouldBeChecked"
    :is-indeterminate="false"
    :label="label"
    :name="name"
    @change="updateInput" />
</template>

<script>
import BaseCheckbox from '../base/base-checkbox/BaseCheckbox.vue';

export default {
  name: 'AppCheckbox',
  components: { BaseCheckbox },
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [Boolean, Array],
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.name);
      }
      return this.modelValue;
    },
  },
  created() {
    if (this.modelValue instanceof Array && !this.name) {
      throw new Error('AppCheckbox: name prop is required when array of names is used as v-model');
    }
  },
  methods: {
    updateInput(event) {
      const isChecked = !event.isChecked;

      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.name);
        } else {
          newValue.splice(newValue.indexOf(this.name), 1);
        }

        this.$emit('change', newValue);
      } else {
        this.$emit('change', isChecked);
      }
    },
  },
};
</script>
