<template>
  <div class="loading-overlay">
    <div
      :class="[
        'loading-overlay__overlay',
        { 'loading-overlay__overlay--is-loading': isLoading },
      ]">
      <Spinner
        v-if="isSpinnerVisible"
        :spinner-text="spinnerText" />
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
import Spinner from './Spinner.vue';

export default {
  name: 'LoadingOverlay',
  components: { Spinner },
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
