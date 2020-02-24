<template>
  <div>
    <NestedCheckboxWrapper
      :options="options"
      :parent-ids="[]" />
  </div>
</template>

<script>
import NestedCheckboxWrapper from './NestedCheckboxWrapper.vue';
import optionsValidator from './optionsValidator';

export default {
  components: { NestedCheckboxWrapper },
  props: {
    options: {
      type: Array,
      required: true,
      validator: optionsValidator,
    },
  },
};
</script>
