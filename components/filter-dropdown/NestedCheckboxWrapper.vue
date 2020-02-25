<template>
  <NestedCheckbox
    :options="options"
    :parent-ids="[]"
    @change="onChange" />
</template>

<script>
import _ from 'lodash';
import NestedCheckbox from './NestedCheckbox';
import optionsValidator from './optionsValidator';

export default {
  name: 'NestedCheckboxWrapper',
  components: { NestedCheckbox },
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
      const changedOption = this.findOption(clonedOptions, event.parentIds);

      if (changedOption.options && changedOption.options.length) {
        const newOptionValue = !changedOption.isChecked;

        this.updateOption(changedOption, newOptionValue);
        this.updateNestedOptions(changedOption.options, newOptionValue);
        this.updateParentOptions(clonedOptions, event.parentIds);
      } else {
        this.updateOption(changedOption, !changedOption.isChecked);
        this.updateParentOptions(clonedOptions, event.parentIds);
      }

      this.$emit('change', clonedOptions);
    },
    findOption(options, [firstId, ...restIds]) {
      const foundOption = _.find(options, ({ id }) => id === firstId);

      if (restIds.length) {
        return this.findOption(foundOption.options, restIds);
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
    updateParentOptions(options, parentIds) {
      const parentIdsWithoutLastOption = _.dropRight(parentIds);

      if (parentIdsWithoutLastOption.length) {
        const foundParent = this.findOption(options, parentIdsWithoutLastOption);

        const checkedOptions = _.filter(foundParent.options, ({ isChecked }) => isChecked);
        const indeterminateOptions = _.filter(foundParent.options, ({ isIndeterminate }) => isIndeterminate);

        if (checkedOptions.length === foundParent.options.length) {
          this.updateOption(foundParent, true);
        } else if (checkedOptions.length || indeterminateOptions.length) {
          this.updateOption(foundParent, 'indeterminate');
        } else {
          this.updateOption(foundParent, false);
        }

        this.updateParentOptions(options, parentIdsWithoutLastOption);
      }
    },
  },
};
</script>
