<template>
  <NestedCheckboxView
    :options="options"
    :parent-names="[]"
    @change="onChange" />
</template>

<script>
import _ from 'lodash';
import NestedCheckboxView from './NestedCheckboxView.vue';
import optionsValidator from './optionsValidator';

export default {
  name: 'NestedCheckbox',
  components: { NestedCheckboxView },
  props: {
    options: {
      type: Array,
      required: true,
      validator: optionsValidator,
    },
  },
  methods: {
    onChange(event) {
      const clonedOptions = _.cloneDeep(this.options);
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
      const foundOption = _.find(options, ({ name }) => name === firstName);

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

      _.assign(option, config[newValue]);
    },
    updateNestedOptions(options, newValue) {
      _.each(options, (option) => {
        option.isChecked = newValue;
        option.isIndeterminate = false;

        if (option.options && option.options.length) {
          this.updateNestedOptions(option.options, newValue);
        }
      });
    },
    updateParentOptions(options, parentNames) {
      const parentNamesWithoutLastOption = _.dropRight(parentNames);

      if (parentNamesWithoutLastOption.length) {
        const foundParent = this.findOption(options, parentNamesWithoutLastOption);

        const checkedOptions = _.filter(foundParent.options, ({ isChecked }) => isChecked);
        const indeterminateOptions = _.filter(foundParent.options, ({ isIndeterminate }) => isIndeterminate);

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
