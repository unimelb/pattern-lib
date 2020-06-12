<template>
  <BaseCheckbox
    :tab-index="tabIndex"
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
    tabIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    shouldBeChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.name);
      }
      return this.modelValue;
    },
  },
  created() {
    if (Array.isArray(this.modelValue) && !this.name) {
      throw new Error('AppCheckbox: name prop is required when array of names is used as v-model');
    }
  },
  methods: {
    updateInput(event) {
      const isChecked = !event.isChecked;

      if (Array.isArray(this.modelValue)) {
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
