<template>
  <ToggleGroup
    ref="toggle"
    :solo="solo"
    :open="open"
  >
    <slot></slot>
  </ToggleGroup>
</template>

<script>
import ToggleGroup from '../toggle/ToggleGroup.vue';

export default {
  name: 'accordion-group',
  components: { ToggleGroup },
  props: {
    solo: {
      type: String,
      default: 'false',
    },
    open: {
      type: String,
      default: 'false',
    },
  },
  data: () => ({
    namespace: '',
  }),
  mounted() {
    this.namespace = this.$refs.toggle.namespace;
  },
};
</script>
