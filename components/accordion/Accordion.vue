<template>
  <div class="fr-accordion js-fr-accordion">
    <slot></slot>
  </div>
</template>

<script>
import Fraccordion from './accordion.js';

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    multiselect: {
      type: Boolean,
      default: true,
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
        multiselectable: this._props.multiselect,
      });
    }
    /* eslint-enable no-underscore-dangle */
  },
};
</script>
