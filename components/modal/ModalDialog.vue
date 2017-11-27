<template>
  <div>
    <button ref="trigger" v-if="!disabled" class="btn fr-dialogmodal-open js-fr-dialogmodal-open" :aria-controls="`modal-dialog-1${this._uid}`">
      <span class="push-icon" v-html="trigger"></span>
    </button>
    <div ref="container" :class="!disabled && 'fr-dialogmodal js-fr-dialogmodal fr-dialogmodal--is-ready'" :id="`modal-dialog-1${this._uid}`" :aria-hidden="!disabled && 'true'">
      <div ref="modal" class="fr-dialogmodal-modal js-fr-dialogmodal-modal" :aria-labelledby="`modal-dialog-title-1${this._uid}`" role="dialog">
        <div role="document">
          <h2 :id="`modal-dialog-title-1${this._uid}`" v-html="title"></h2>
          <slot></slot>
          <br>
          <button ref="close" v-if="!disabled" class="fr-dialogmodal-close js-fr-dialogmodal-close" aria-label="Close Dialog" type="button">&#x2715;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-dialog',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    title: String,
    trigger: String,
  },
  data() {
    return {
      selector: '.js-fr-dialogmodal',
      modalSelector: '.js-fr-dialogmodal-modal',
      openSelector: '.js-fr-dialogmodal-open',
      closeSelector: '.js-fr-dialogmodal-close',
      isAlert: false,
      readyClass: 'fr-dialogmodal--is-ready',
      activeClass: 'fr-dialogmodal--is-active',
    };
  },
  mounted() {
    if (this.$refs.trigger && this.$refs.close) {
      this.$refs.trigger.addEventListener('click', this.openDialog);
      this.$refs.close.addEventListener('click', this.closeDialog);
      this.$refs.container.addEventListener('click', this.closeContainer);
    }
  },
  methods: {
    openDialog() {
      const { container, modal } = this.$refs;

      // show container and focus the modal
      container.setAttribute('aria-hidden', false);
      modal.setAttribute('tabindex', -1);
      // set first/last focusable elements
      // focusableElements = _q(focusableSelectors.join(), modal);
      // focus first element if exists, otherwise focus modal element
      // if (focusableElements.length) focusableElements[0].focus();
      // else modal.focus();
      // update bound events
      // _defer(_bindDocKey);
      // _defer(_bindClosePointer);
      // if contents are not interactive, bind click off
      // if (!isAlert) _defer(_bindContainerPointer);
      // reset scroll
      modal.scrollTop = 0;
      // update style hook
      container.classList.add(this.activeClass);
    },
    closeDialog() {
      const { container, modal } = this.$refs;

      // get container element
      // const container = modal.parentElement;
      // show container and focus the modal
      container.setAttribute('aria-hidden', true);
      modal.removeAttribute('tabindex');
      // update bound events
      // _unbindDocKey();
      // _unbindClosePointer();
      // if contents are not interactive, unbind click off
      // if (!isAlert) _unbindContainerPointer();
      // update style hook
      container.classList.remove(this.activeClass);
      // return focus to button that opened the modal and reset the reference
      // if (returnfocus) {
      //   currButtonOpen.focus();
      //   currButtonOpen = null;
      // }
    },
    closeContainer(e) {
      if (e.target === this.$refs.container) this.closeDialog();
    },
  },
};
</script>
