<template>
  <SectionToggle ref="toggle" :disabled="disabled" :solo="solo" :open="open" class="accordion">
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
  methods: {
    handleClick(e) { this.$refs.toggle.handleClick(e); },
    handleKey(e) { this.$refs.toggle.handleKey(e); },
  },
};
</script>
