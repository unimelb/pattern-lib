<template>
  <div class="fr-accordion js-fr-accordion">
    <slot />
  </div>
</template>

<script>
  import Fraccordion from './accordion.js';

  export default {
    mounted: function() {
      if (!this._props.disabled)
        Fraccordion({
          firstPanelsOpenByDefault: this._props.open,
          multiselectable: this._props.multiselect,
        });
    },

    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      multiselect: {
        type: Boolean,
        default: true
      },
      open: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
