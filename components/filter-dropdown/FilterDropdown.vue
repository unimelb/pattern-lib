<template>
  <div>
    <div
      v-for="option in options"
      :key="option.id">
      TODO
    </div>
  </div>
</template>

<script>
import { every } from 'lodash';

export default {
  props: {
    options: {
      type: Array,
      required: true,
      validator(value) {
        if (!value.length) {
          return false;
        }

        const validateOptions = (options) => every(
          options,
          ({
            id, label, isChecked, isIndeterminate, options: nestedOptions,
          }) => !!id
              && !!label
              && typeof isChecked === 'boolean'
              && typeof isIndeterminate === 'boolean'
              && (nestedOptions ? validateOptions(nestedOptions) : true)
        );

        return validateOptions(value);
      },
    },
    parentIds: {
      type: Array,
      required: true,
      validator(value) {
        return every(value, (id) => !!id && typeof id === 'string');
      },
    },
  },
};
</script>
