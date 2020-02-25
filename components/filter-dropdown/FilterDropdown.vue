<template>
  <div>
    <NestedCheckbox
      :options="testOptions"
      :parent-ids="[]"
      @change="onChange" />
  </div>
</template>

<script>
import _ from 'lodash';
import NestedCheckbox from './components/NestedCheckbox';
import options from './components/NestedCheckbox/nestedCheckboxOptions'; // TODO remove

export default {
  components: { NestedCheckbox },
  props: {
    options: {
      type: Array,
      required: true,
      validator(value) {
        if (!value.length) {
          return false;
        }

        const validateOptions = (optionsToValidate) => _.every(
          optionsToValidate,
          (option) => !!option.label
            && (option.options
              ? validateOptions(option.options)
              : typeof option.isChecked === 'boolean')
        );

        return validateOptions(value);
      },
    },
  },
  data() {
    return {
      testOptions: options,
    };
  },
  methods: {
    onChange(newOptions) {
      this.testOptions = newOptions;
    },
  },
};
</script>
