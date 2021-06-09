<template>
  <div ref="card">
    <FocusWrapper
      color="navy"
      semi-opaque>
      <div class="testimonials">
        <div
          :style="{ backgroundImage: `url(${thumb})` }"
          :aria-label="name"
          class="testimonials__img"
          role="img" />
        <div class="testimonials__info">
          <BlockQuotation
            :author="author"
            :sub-cite="post"
            small
            large-quotes
            class="testimonials__quotation">
            {{ testimonials }}
          </BlockQuotation>
        </div>
      </div>
    </FocusWrapper>
  </div>
</template>

<script>

import FocusWrapper from '../focus-wrapper/FocusWrapper.vue';
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';
import ContentBlock from '../content-block/ContentBlock.vue';
import BlockQuotation from '../block-quotation/BlockQuotation.vue';

export default {
  name: 'Testimonials',
  components: { BlockQuotation, FocusWrapper },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
  props: {
    thumb: {
      type: String,
      default: IMAGE_PLACEHOLDER_BIG,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    year: {
      type: String,
      default: '',
      required: true,
    },
    post: {
      type: String,
      default: '',
    },
    testimonials: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    author() {
      return `${this.name}, ${this.year}`;
    },
  },
};
</script>
