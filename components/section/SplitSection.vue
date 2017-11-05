<template>
  <section class="split-section">
    <div class="split-section__side" :class="{ 'split-section__side--with-image': imageLeft, 'split-section__withquote': quote }" :style="{ backgroundImage: imageLeft ? `url(${bgImage})` : '' }">
      <SplitSectionQuote v-if="quote && imageLeft" :quote="quote" :cite="cite" />
      <div class="split-section__inner" v-if="imageRight">
        <slot>
          default left text
        </slot>
      </div>
    </div>
    <div class="split-section__side" :class="{ 'split-section__side--with-image': imageRight, 'split-section__withquote': quote }" :style="{ backgroundImage: imageRight ? `url(${bgImage})` : '' }">
      <SplitSectionQuote v-if="quote && imageRight" :quote="quote" :cite="cite" />
      <div class="split-section__inner" v-if="imageLeft">
        <slot>
          default right text
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
import CardFocusBox from './../cards/CardFocusBox.vue';
import SplitSectionQuote from './SplitSectionQuote.vue';
export default {
  name: 'SplitSection',
  components: { CardFocusBox, SplitSectionQuote },
  props: {
    imageLeft: {
      type: Boolean,
    },
    imageRight: {
      type: Boolean,
    },
    bgImage: {
      type: String,
    },
    quote: String,
    cite: String,
  },
};
</script>
