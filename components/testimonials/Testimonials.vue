<template>
  <div ref="card">
    <CardFocusBox
      :class="{'bg-inverted': inverted, 'bg-alt': !inverted}"
      :size="size"
      semi-opaque
      class="card--image-focus--col-brand"
    >
      <div class="testimonials--block">
        <div
          :style="{ backgroundImage: `url(${thumb})` }"
          :aria-label="title"
          class="testimonials--block-img"/>
        <div class="testimonials--block-info">
          <BlockQuotation>{{ testimonials }}</BlockQuotation>
          <h3 class="testimonials--block-info_name"> &#8212; {{ name }}</h3>
          <p class="testimonials--block-info_post">{{ post }}</p>
        </div>
      </div>
    </CardFocusBox>
  </div>
</template>


<script>

import CardFocusBox from '../cards/CardFocusBox.vue';
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';
import ContentBlock from '../content-block/ContentBlock.vue';
import BlockQuotation from '../block-quotation/BlockQuotation.vue';

export default {
  name: 'Testimonials',
  components: { CardFocusBox, BlockQuotation },
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
