<template>
  <ToggleBlock ref="container" class="toggleblock--mobile">
    <template slot="default">
      <slot></slot>
    </template>
    <template slot="hidden">
      <slot name="hidden"></slot>
      <a class="toggleblock__footer" @click="toggle">Close panel</a>
    </template>
  </ToggleBlock>
</template>

<script>
import ToggleBlock from './ToggleBlock.vue';

export default {
  components: { ToggleBlock },
  methods: {
    toggle() { this.$refs.container.toggle(); },
  },
};
</script>
