<template>
  <div class="side-panel">
    <div class="side-panel__inner">
      <ul class="side-panel__nav">
        <side-panel-nav-item>test 1</side-panel-nav-item>
        <side-panel-nav-item>test 2</side-panel-nav-item>
        <side-panel-nav-item>test 3</side-panel-nav-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import SidePanelNavItem from './SidePanelNavItem.vue';

  export default {
    components: { SidePanelNavItem },
    props: {
      
    }
  }
</script>