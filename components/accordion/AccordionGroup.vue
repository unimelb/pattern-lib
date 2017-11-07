<template>
  <SectionToggle :disabled="disabled" :solo="solo" :open="open" class="accordion">
    <slot></slot>
  </SectionToggle>
</template>

<script>
import SectionToggle from '../section/toggle/SectionToggle.vue';

export default {
  components: { SectionToggle },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
