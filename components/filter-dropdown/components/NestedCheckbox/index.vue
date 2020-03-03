<template>
  <div>
    <NestedCheckboxUpdateWrapper
      :options="optionsWithIndeterminateState"
      @change="onChange" />
  </div>
</template>

<script>
import _ from 'lodash';
import NestedCheckboxUpdateWrapper from './NestedCheckboxUpdateWrapper.vue';
import optionsValidator from '../../nestedCheckboxOptionsValidator';

export default {
  name: 'NestedCheckbox',
  components: { NestedCheckboxUpdateWrapper },
  props: {
    options: {
      type: Array,
      required: true,
      validator: optionsValidator,
    },
  },
  computed: {
    optionsWithIndeterminateState() {
      return this.getOptionsWithIndeterminateState(this.options);
    },
  },
  methods: {
    onChange(newOptions) {
      this.$emit('change', this.getUpdatedOptions(newOptions));
    },
    getUpdatedOptions(updatedOptionsWithIndeterminateState) {
      return _.map(
        updatedOptionsWithIndeterminateState,
        (option) => {
          if (option.options && option.options.length) {
            const {
              isChecked, isIndeterminate, options, ...restOption
            } = option;

            return {
              ...restOption,
              options: this.getUpdatedOptions(options),
            };
          }

          const { isIndeterminate, options, ...restOption } = option;

          return restOption;
        }
      );
    },
    getOptionsWithIndeterminateState(options) {
      return _.map(options, (option) => {
        if (option.options && option.options.length) {
          const lastParentOption = this.getIsLastParentOption(option);

          if (lastParentOption) {
            // penultimate nesting
            const updatedOptions = this.getOptionsWithIndeterminateState(option.options);
            const { isChecked, isIndeterminate } = this.getCheckedAndIndeterminateState(updatedOptions);
            return {
              ...option,
              isChecked,
              isIndeterminate,
              options: updatedOptions,
            };
          }

          // rest nesting
          const updatedOptions = this.getOptionsWithIndeterminateState(option.options);
          const { isChecked, isIndeterminate } = this.getCheckedAndIndeterminateState(updatedOptions);

          return {
            ...option,
            isChecked,
            isIndeterminate,
            options: updatedOptions,
          };
        }

        // deepest nesting
        return {
          ...option,
          isIndeterminate: false,
        };
      });
    },
    getIsLastParentOption(option) {
      return _
        .every(
          option.options,
          ({ isChecked }) => typeof isChecked === 'boolean'
        );
    },
    getCheckedAndIndeterminateState(options) {
      const checkedInnerOptions = _
        .filter(
          options,
          ({ isChecked }) => isChecked
        );
      const indeterminateInnerOptions = _
        .filter(
          options,
          ({ isIndeterminate }) => isIndeterminate
        );


      const isChecked = checkedInnerOptions.length === options.length;
      const isIndeterminate = (!!indeterminateInnerOptions.length || !!checkedInnerOptions.length) && !isChecked;

      return { isChecked, isIndeterminate };
    },
  },
};
</script>
