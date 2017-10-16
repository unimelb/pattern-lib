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
    /* eslint-disable no-underscore-dangle */
    if (!this._props.disabled) {
      Fraccordion({
        firstPanelsOpenByDefault: this._props.open,
        multiselectable: this._props.solo,
      });
    }
    /* eslint-enable no-underscore-dangle */
  },
};
</script>
