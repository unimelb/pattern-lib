<template>
  <section
    :class="{ 'split-section--withquote': quote }"
    class="split-section">
    <div
      :class="{ 'split-section__side--with-image': imageLeft }"
      :style="{ backgroundImage: imageLeft ? `url(${bgImage})` : '' }"
      class="split-section__side">
      <SplitSectionQuote
        v-if="quote && imageLeft"
        :quote="quote"
        :cite="cite" />
      <div
        v-if="imageRight"
        class="split-section__inner">
        <slot>default left text</slot>
      </div>
    </div>
    <div
      :class="{ 'split-section__side--with-image': imageRight }"
      :style="{ backgroundImage: imageRight ? `url(${bgImage})` : '' }"
      class="split-section__side">
      <SplitSectionQuote
        v-if="quote && imageRight"
        :quote="quote"
        :cite="cite" />
      <div
        v-if="imageLeft"
        class="split-section__inner">
        <slot>default right text</slot>
      </div>
    </div>
  </section>
</template>

<script>
import SplitSectionQuote from './SplitSectionQuote.vue';
export default {
  name: 'SplitSection',
  components: { SplitSectionQuote },
  props: {
    imageLeft: {
      type: Boolean,
      default: false,
    },
    imageRight: {
      type: Boolean,
      default: false,
    },
    bgImage: {
      type: String,
      default: '',
    },
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
