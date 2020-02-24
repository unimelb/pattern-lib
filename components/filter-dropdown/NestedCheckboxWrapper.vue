<template>
  <NestedCheckbox
    :options="options"
    :parent-ids="[]"
    @change="onChange" />
</template>

<script>
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
    onChange(/* event */) {
      // TODO
      // console.log(event);
    },
  },
};
</script>
