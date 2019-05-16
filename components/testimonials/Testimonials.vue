<template>
  <div ref="card">
    <FocusWrapper
      :class="{'bg-inverted': inverted, 'bg-alt': !inverted}"
      :size="size"
      color="navy"
      semi-opaque
    >
      <div class="testimonials">
        <div
          :style="{ backgroundImage: `url(${thumb})` }"
          :aria-label="title"
          class="testimonials__img"/>
        <div class="testimonials__info">
          <BlockQuotation 
            :author="name"
            :sub-cite="post"
            size="small">{{ testimonials }}</BlockQuotation>
        </div>
      </div>
    </FocusWrapper>
  </div>
</template>


<script>

import FocusWrapper from '../focus-wrapper/FocusWrapper.vue'
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
    },
    post: {
      type: String,
      default: '',
    },
    testimonials: {
      type: String,
      default: '',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      size: 'large',
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth < 599) {
        this.size = 'small';
      } else {
        this.size = 'large';
      }
    },
  },
};
</script>
