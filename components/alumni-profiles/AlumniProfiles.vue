<template>
  <div ref="card">
    <CardFocusBox
      :class="{'bg-inverted': inverted, 'bg-alt': !inverted}"
      :size="size"
      semi-opaque
      class="card--image-focus--col-brand"
    >
      <div class="alumni--block">
        <div
          :style="{ backgroundImage: `url(${thumb})` }"
          :aria-label="title"
          class="alumni--block-img"/>
        <div class="alumni--block-info">
          <p class="alumni--block-info_title">Alumni profile</p>
          <h3 class="alumni--block-info_name">{{ name }}</h3>
          <hr class="alumni--block-info_line">
          <p class="alumni--block-info_short-text">{{ short_text }}</p>
          <p class="alumni--block-info_long-text">{{ long_text }}</p>
        </div>
      </div>
    </CardFocusBox>
  </div>
</template>


<script>

import CardFocusBox from '../cards/CardFocusBox.vue';

export default {
  name: 'AlumniProfiles',
  components: { CardFocusBox },
  props: {
    thumb: {
      type: String,
      default: 'https://placeimg.com/360/200/nature',
    },
    name: {
      type: String,
      default: '',
    },
    short_text: {
      type: String,
      default: '',
    },
    long_text: {
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
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
  methods: {
    getWindowWidth(event) {
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
