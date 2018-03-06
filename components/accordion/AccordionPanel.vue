<template>
  <SectionTogglePanel :title="title">
    <slot></slot>
  </SectionTogglePanel>
</template>

<script>
import SectionTogglePanel from '../section/toggle/SectionTogglePanel.vue';

export default {
  components: { SectionTogglePanel },
  props: {
    title: String,
  },
  methods: {
    handleClick(e) { this.$parent.handleClick(e); },
    handleKey(e) { this.$parent.handleKey(e); },
  },
};
</script>
