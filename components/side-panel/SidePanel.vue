<template>
  <nav class="side-panel">
    <div class="side-panel__inner">
      <h5 class="side-panel__title">{{ title }}
        <button class="side-panel__trigger" @click="toggleOpen">
          <SvgIcon width="10" height="10" name="close" /> </button>
      </h5>
      <ul class="side-panel__nav" :class="{'side-panel__nav--closed' : !open}">
        <slot></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
// side-panel-toggle-open

export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
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
      this.$emit('side-panel-toggle-open', this.open);
    },
  },
};
</script>
