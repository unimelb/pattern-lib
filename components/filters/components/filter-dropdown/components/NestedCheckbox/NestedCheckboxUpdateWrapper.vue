<template>
  <NestedCheckboxView
    ref="nestedCheckboxView"
    :options="options"
    :parent-names="[]"
    @change="onChange" />
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
import NestedCheckboxView from './NestedCheckboxView.vue';
import updateWrapperOptionsValidator from './updateWrapperOptionsValidator';

export default {
  name: 'NestedCheckboxUpdateWrapper',
  components: { NestedCheckboxView },
  props: {
    options: {
      type: Array,
      required: true,
      validator: updateWrapperOptionsValidator,
    },
  },
  methods: {
    focusOnFirst() {
      this.$refs.nestedCheckboxView.focusOnFirst();
    },
    onChange(event) {
      const clonedOptions = cloneDeep(this.options);
      const changedOption = this.findOption(clonedOptions, event.parentNames);

      if (changedOption.options && changedOption.options.length) {
        const newOptionValue = !changedOption.isChecked;

        this.updateOption(changedOption, newOptionValue);
        this.updateNestedOptions(changedOption.options, newOptionValue);
        this.updateParentOptions(clonedOptions, event.parentNames);
      } else {
        this.updateOption(changedOption, !changedOption.isChecked);
        this.updateParentOptions(clonedOptions, event.parentNames);
      }

      this.$emit('change', clonedOptions);
    },
    findOption(options, [firstName, ...restNames]) {
      const foundOption = options.find(({ name }) => name === firstName);

      if (restNames.length) {
        return this.findOption(foundOption.options, restNames);
      }

      return foundOption;
    },
    updateOption(option, newValue) {
      const config = {
        true: {
          isChecked: true,
          isIndeterminate: false,
        },
        false: {
          isChecked: false,
          isIndeterminate: false,
        },
        indeterminate: {
          isChecked: false,
          isIndeterminate: true,
        },
      };

      Object.assign(option, config[newValue]);
    },
    updateNestedOptions(options, newValue) {
      options.forEach((option) => {
        option.isChecked = newValue;
        option.isIndeterminate = false;

        if (option.options && option.options.length) {
          this.updateNestedOptions(option.options, newValue);
        }
      });
    },
    updateParentOptions(options, parentNames) {
      const sliceStart = 0;
      const sliceEnd = parentNames.length - 1;
      const parentNamesWithoutLastOption = parentNames.slice(sliceStart, sliceEnd);

      if (parentNamesWithoutLastOption.length) {
        const foundParent = this.findOption(options, parentNamesWithoutLastOption);

        const checkedOptions = foundParent.options.filter(({ isChecked }) => isChecked);
        const indeterminateOptions = foundParent.options.filter(({ isIndeterminate }) => isIndeterminate);

        if (checkedOptions.length === foundParent.options.length) {
          this.updateOption(foundParent, true);
        } else if (checkedOptions.length || indeterminateOptions.length) {
          this.updateOption(foundParent, 'indeterminate');
        } else {
          this.updateOption(foundParent, false);
        }

        this.updateParentOptions(options, parentNamesWithoutLastOption);
      }
    },
  },
};
</script>
