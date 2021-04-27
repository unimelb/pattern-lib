<template>
  <ToggleBlock
    ref="container"
    :light="light"
    class="toggleblock--mobile">
    <template slot="default">
      <slot />
    </template>
    <template slot="hidden">
      <slot name="hidden" />
      <a
        class="toggleblock__footer"
        :class="light ? 'toggleblock__footer--light' : ''"
        tabindex="0"
        role="button"
        @click="toggle">Close panel</a>
    </template>
  </ToggleBlock>
</template>

<script>
import ToggleBlock from './ToggleBlock.vue';

export default {
  components: { ToggleBlock },
  props: {
    light: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$refs.container.toggle();
    },
  },
};
</script>
