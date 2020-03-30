<template>
  <div class="loading-overlay">
    <div
      :class="[
        'loading-overlay__overlay',
        { 'loading-overlay__overlay--is-loading': isLoading },
      ]">
      <div
        v-if="isSpinnerVisible"
        class="loading-overlay__spinner">
        <div class="loading-overlay__spinner-cube" />

        <div
          v-if="spinnerText"
          class="loading-overlay__spinner-text">
          {{ spinnerText }}
        </div>
      </div>
    </div>

    <div
      :class="[
        'loading-overlay__content',
        { 'loading-overlay__content--is-loading': isLoading },
      ]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    spinnerText: {
      type: String,
      default: '',
    },
    isSpinnerVisible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
