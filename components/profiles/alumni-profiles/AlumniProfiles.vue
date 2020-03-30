<template>
  <div ref="card">
    <FocusWrapper
      :size="size"
      color="navy"
      semi-opaque>
      <div class="alumni">
        <div
          :style="{ backgroundImage: `url(${thumb})` }"
          :aria-label="name"
          class="alumni__img"
          role="img" />
        <div class="alumni__info">
          <p class="alumni__title">
            {{ title }}
          </p>
          <h3 class="alumni__name">
            {{ name }}
          </h3>
          <hr class="alumni__line">
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="alumni__short-text"
            v-html="text" />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
    </FocusWrapper>
  </div>
</template>


<script>

import FocusWrapper from '../../focus-wrapper/FocusWrapper.vue';
import { IMAGE_PLACEHOLDER_BIG } from '../../../utils/placeholders';
import { WIDTH_599 } from '../../../helpers/viewports';

export default {
  name: 'AlumniProfiles',
  components: { FocusWrapper },
  props: {
    thumb: {
      type: String,
      default: IMAGE_PLACEHOLDER_BIG,
    },
    title: {
      type: String,
      default: 'Alumni profile',
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    text: {
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
      if (this.windowWidth < WIDTH_599) {
        this.size = 'small';
      } else {
        this.size = 'large';
      }
    },
  },
};
</script>
