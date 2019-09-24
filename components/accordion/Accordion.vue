<template>
  <ToggleBlock
    ref="comp"
    class="accordion"
  >
    <template slot="default">
      <h2
        class="toggle__trigger"
        v-html="name"
      />
    </template>
    <template slot="hidden">
      <div class="toggleblock__hidden-inner">
        <slot />
      </div>
    </template>
  </ToggleBlock>
</template>

<script>
import ToggleBlock from '../toggle/ToggleBlock.vue';

export default {
  name: 'Accordion',
  components: { ToggleBlock },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    groupParent() {
      return (this.$parent && this.$parent.$parent && this.$parent.$parent.$refs.toggle) ? this.$parent.$parent.$refs.toggle : false;
    },
  },
  mounted() {
    if (this.$parent.namespace) this.$refs.comp.namespace = this.$parent.namespace;
  },
  methods: {
    toggle() { this.$refs.comp.toggle(); },
    setActive(v) { this.$refs.comp.setActive(v); },
    setIndex(v) { this.$refs.comp.setIndex(v); },
    getActive() { return this.$refs.comp.getActive(); },
    header() { return this.$refs.comp.header(); },
  },
};
</script>
