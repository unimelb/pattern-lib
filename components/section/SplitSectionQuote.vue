<template>
  <FocusWrapper
    color="teal"
    padded
    class="bg-white">
    <p class="split-section__quote">
      {{ quote }}
    </p>
    <p
      v-if="cite"
      class="split-section__quote-cite">
      {{ cite }}
    </p>
  </FocusWrapper>
</template>

<script>
import FocusWrapper from 'components/focus-wrapper/FocusWrapper.vue';

export default {
  components: {
    FocusWrapper,
  },
  props: {
    quote: {
      type: String,
      default: '',
    },
    cite: {
      type: String,
      default: '',
    },
  },
};
</script>
