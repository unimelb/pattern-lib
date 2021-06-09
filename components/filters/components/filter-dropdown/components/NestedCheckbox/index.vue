<template>
  <div>
    <NestedCheckboxUpdateWrapper
      ref="updateWrapper"
      :options="optionsWithIndeterminateState"
      @change="onChange" />
  </div>
</template>

<script>
import optionsValidator from '../../helpers/nestedCheckboxOptionsValidator';
import NestedCheckboxUpdateWrapper from './NestedCheckboxUpdateWrapper.vue';

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
    focusOnFirst() {
      this.$refs.updateWrapper.focusOnFirst();
    },
    onChange(newOptions) {
      this.$emit('change', this.getUpdatedOptions(newOptions));
    },
    getUpdatedOptions(updatedOptionsWithIndeterminateState) {
      return updatedOptionsWithIndeterminateState.map((option) => {
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
      });
    },
    getOptionsWithIndeterminateState(options) {
      return options.map((option) => {
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
      return option.options.every(({ isChecked }) => typeof isChecked === 'boolean');
    },
    getCheckedAndIndeterminateState(options) {
      const checkedInnerOptions = options
        .filter(
          ({ isChecked }) => isChecked
        );
      const indeterminateInnerOptions = options
        .filter(
          ({ isIndeterminate }) => isIndeterminate
        );

      const isChecked = checkedInnerOptions.length === options.length;
      const isIndeterminate = (!!indeterminateInnerOptions.length || !!checkedInnerOptions.length) && !isChecked;

      return { isChecked, isIndeterminate };
    },
  },
};
</script>
