<template>
  <div>
    <button class="btn fr-dialogmodal-open js-fr-dialogmodal-open" :aria-controls="`modal-dialog-1${this._uid}`" :disabled="disabled !== 'false' ? 'disabled' : false">
      <span class="push-icon" v-html="trigger"></span>
    </button>
    <div :class="disabled === 'false' ? 'fr-dialogmodal js-fr-dialogmodal fr-dialogmodal--is-ready' : false" :id="`modal-dialog-1${this._uid}`" :aria-hidden="(disabled === 'false')">
      <div class="fr-dialogmodal-modal js-fr-dialogmodal-modal" :aria-labelledby="`modal-dialog-title-1${this._uid}`" role="dialog">
        <div role="document">
          <h2 :id="`modal-dialog-title-1${this._uid}`" v-html="title"></h2>
          <slot></slot>
          <br>
          <button v-if="disabled === 'false'" class="fr-dialogmodal-close js-fr-dialogmodal-close" aria-label="Close Dialog" type="button">&#x2715;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frdialogmodal from './_fr-dialogmodal';

export default {
  name: 'modal-dialog',
  props: {
    disabled: {
      type: String,
      default: 'false',
    },
    title: String,
    trigger: String,
  },
  mounted() {
    /* eslint-disable no-underscore-dangle */
    if (this._props.disabled !== 'true') {
      Frdialogmodal();
    }
    /* eslint-enable no-underscore-dangle */
  },
};
</script>
