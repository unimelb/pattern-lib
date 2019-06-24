<template>
  <div ref="card">
    <FocusWrapper
      :size="size"
      color="navy"
      semi-opaque
    >
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
            class="testimonials__quotation">{{ testimonials }}</BlockQuotation>
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
  decoratorProps: { size: 'sm' },
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
      ype: String,
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
  data() {
    return {
      size: 'large',
    };
  },
  computed: {
    author() {
      return `${this.name}, ${this.year}`;
    },
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
