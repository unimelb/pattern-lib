<template>
  <div class="fr-accordion js-fr-accordion" :data-open="open" :data-solo="solo">
    <slot></slot>
  </div>
</template>

<script>
import Accordion from './accordion.js';

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this._props.disabled) { // eslint-disable-line no-underscore-dangle
      Accordion(this.$el);
    }
  },
};
</script>
