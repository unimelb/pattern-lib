<template>
  <ToggleBlock ref="comp" class="accordion">
    <template slot="default">
      <h2 class="toggle__trigger" v-if="name" v-html="name"></h2>
    </template>
    <template slot="hidden">
      <div class="toggleblock__hidden-inner">
        <slot></slot>
      </div>
    </template>
  </ToggleBlock>
</template>

<script>
import ToggleBlock from '../toggle/ToggleBlock.vue';

export default {
  name: 'accordion',
  components: { ToggleBlock },
  props: {
    name: {
      type: String,
    },
  },
  mounted() {
    if (this.$parent.namespace) this.$refs.comp.namespace = this.$parent.namespace;
  },
  methods: {
    toggle() { this.$refs.comp.toggle(); },
    setActive(v) { this.$refs.comp.setActive(v); },
    setIndex(v) { this.$refs.comp.setIndex(v); },
    handleClick(e) {
      if (this.$parent.handleClick) {
        this.$parent.handleClick(e);
      } else {
        this.$refs.comp.toggle();
      }
    },
    handleKey(e) { this.$parent.handleKey(e); },
    getActive() { return this.$refs.comp.getActive(); },
    header() { return this.$refs.comp.header(); },
  },
};
</script>
