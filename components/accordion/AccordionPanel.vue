<template>
  <SectionTogglePanel
    ref="panel"
    :title="title"
  >
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
  data: () => ({
    index: 0,
  }),
  mounted() {
    this.$refs.panel.index = this.index;
    this.$refs.panel.namespace = this.$parent.namespace;
  },
  methods: {
    handleClick(e) { this.$parent.handleClick(e); },
    handleKey(e) { this.$parent.handleKey(e); },
    setExpanded(val) { this.$refs.panel.isExpanded = val; },
    getPanelHeight() { this.$refs.panel.getPanelHeight(); },
    setPanelHeight() { this.$refs.panel.setPanelHeight(); },
    unsetPanelHeight() { this.$refs.panel.unsetPanelHeight(); },
  },
};
</script>
