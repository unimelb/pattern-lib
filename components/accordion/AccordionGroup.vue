<template>
  <ToggleGroup
    ref="toggle"
    :solo="solo"
    :open="open">
    <slot />
  </ToggleGroup>
</template>

<script>
import ToggleGroup from 'components/toggle/ToggleGroup.vue';

export default {
  name: 'AccordionGroup',
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
