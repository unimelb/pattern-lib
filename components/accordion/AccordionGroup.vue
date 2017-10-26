<template>
  <div class="fr-accordion js-fr-accordion">
    <slot></slot>
  </div>
</template>

<script>
import Fraccordion from './_fr-accordion.js';

export default {
  name: 'accordion-group',
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
    if (this.disabled) return;

    Fraccordion({
      firstPanelsOpenByDefault: this.open,
      multiselectable: !this.solo,
    });
  },
};
</script>
