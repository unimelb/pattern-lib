<template>
  <div>
    <button
      ref="trigger"
      :aria-controls="`modal-dialog-1${_uid}`"
      class="btn modal-dialog__open"
      @click="openDialog">
      <span
        class="push-icon"
        v-html="trigger" />
    </button>
    <div
      :id="`modal-dialog-1${_uid}`"
      ref="container"
      class="modal-dialog"
      aria-hidden="true"
      @click="closeContainer"
      @keypress.27="closeDialog"
      @keypress.9="inputTrap">
      <div
        ref="modal"
        :aria-labelledby="`modal-dialog-title-1${_uid}`"
        class="modal-dialog__modal"
        role="dialog">
        <div role="document">
          <h2
            :id="`modal-dialog-title-1${_uid}`"
            v-html="title" />
          <slot />
          <br>
          <button
            class="modal-dialog__close"
            aria-label="Close Dialog"
            type="button"
            @click="closeDialog">
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// modal-dialog-open-dialog
// modal-dialog-close-dialog
// modal-dialog-close-container

import focusableElements from '../../utils/focusable-elements';

export default {
  name: 'ModalDialog',
  props: {
    title: {
      type: String,
      default: '',
    },
    trigger: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      focusableElements: [],
    };
  },
  mounted() {
    // Move to end
    this.$refs.container.parentNode.removeChild(this.$refs.container);
    document.body.appendChild(this.$refs.container);

    // Create array of focusable elements in context
    this.focusableElements = focusableElements(this.$refs.modal);
  },
  methods: {
    openDialog() {
      this.$refs.container.classList.add('active');

      const { container, modal } = this.$refs;

      this.$root.$el.setAttribute('aria-hidden', true);

      // Show container and focus the modal
      container.setAttribute('aria-hidden', false);
      modal.setAttribute('tabindex', '-1');

      // Focus first element if exists, otherwise focus modal element
      if (this.focusableElements.length) {
        this.focusableElements[0].focus();
      } else {
        modal.focus();
      }

      // Reset scroll
      modal.scrollTop = 0;
      this.$emit('modal-dialog-open-dialog');
    },
    closeDialog() {
      const { container, modal } = this.$refs;

      // Hide container
      container.setAttribute('aria-hidden', true);
      modal.removeAttribute('tabindex');

      this.$root.$el.setAttribute('aria-hidden', false);

      // Return focus to trigger
      this.$refs.trigger.focus();
      this.$emit('modal-dialog-close-dialog');
    },
    closeContainer(e) {
      if (e.target === this.$refs.container) this.closeDialog();
      this.$emit('modal-dialog-close-container');
    },
    inputTrap(e) {
      // Get the index of the current active element within the modal
      const focusedIndex = this.focusableElements.indexOf(document.activeElement);

      // First element is focused and shiftkey is in use
      // eslint-disable-next-line no-magic-numbers
      if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
        // Loop back to last el
        this.focusableElements[this.focusableElements.length - 1].focus();
        e.preventDefault();

      // Last element is focused and shiftkey is not in use
      } else if (!e.shiftKey && focusedIndex === this.focusableElements.length - 1) {
        // Focus on first el
        this.focusableElements[0].focus();
        e.preventDefault();
      }
    },
  },
};
</script>
