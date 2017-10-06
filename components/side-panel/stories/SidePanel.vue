<template>
  <div class="side-panel">
    <div class="side-panel__inner">
      <h5 class="side-panel__title">Navigation</h5>
      <ul class="side-panel__nav">
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
        default: false
      }
    }
  }
</script>