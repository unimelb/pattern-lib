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
      type: String,
      default: 'false',
    },
    solo: {
      type: String,
      default: 'false',
    },
    open: {
      type: String,
      default: 'false',
    },
  },
  mounted() {
    /* eslint-disable no-underscore-dangle */
    if (this._props.disabled !== 'true') {
      Fraccordion({
        firstPanelsOpenByDefault: (this._props.open === 'true'),
        multiselectable: (this._props.solo !== 'true'),
      });
    }
    /* eslint-enable no-underscore-dangle */
  },
};
</script>
