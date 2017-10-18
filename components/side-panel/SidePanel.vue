<template>
  <div class="side-panel">
    <div class="side-panel__inner">
      <h5 class="side-panel__title">Navigation
        <button class="side-panel__trigger" @click="toggleOpen">
          <SvgIcon width="10" height="10" name="close" /> </button>
      </h5>

      <ul class="side-panel__nav" v-show="open" :class="{'side-panel__nav--closed' : !open}">
        <side-panel-nav-item :right="right" target="#section1">Section 1</side-panel-nav-item>
        <side-panel-nav-item :right="right" target="#section2">Section with a really long heading 2</side-panel-nav-item>
        <side-panel-nav-item :right="right" target="#section3">Section 3</side-panel-nav-item>
      </ul>
    </div>
  </div>
</template>

<script>
import SidePanelNavItem from './SidePanelNavItem.vue';

export default {
  components: { SidePanelNavItem },
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    initialOpen: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return { open: this.initialOpen };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>
