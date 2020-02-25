<template>
  <div>
    <NestedCheckboxWrapper
      :options="testOptions"
      :parent-ids="[]"
      @change="onChange" />
  </div>
</template>

<script>
import NestedCheckboxWrapper from './NestedCheckboxWrapper.vue';
import optionsValidator from './optionsValidator';
import options from './stories/options';

export default {
  components: { NestedCheckboxWrapper },
  props: {
    options: {
      type: Array,
      required: true,
      validator: optionsValidator,
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
