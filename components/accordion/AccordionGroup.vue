<template>
  <SectionToggle
    ref="toggle"
    :solo="solo"
    :open="open"
    class="accordion"
  >
    <slot></slot>
  </SectionToggle>
</template>

<script>
import SectionToggle from '../section/toggle/SectionToggle.vue';

export default {
  components: { SectionToggle },
  props: {
    solo: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      namespace: '',
    };
  },
  mounted() {
    this.namespace = this.$refs.toggle.namespace;
  },
  methods: {
    handleClick(e) { this.$refs.toggle.handleClick(e); },
    handleKey(e) { this.$refs.toggle.handleKey(e); },
  },
};
</script>
