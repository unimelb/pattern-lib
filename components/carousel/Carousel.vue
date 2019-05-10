<template>
  <div class="carousel">
    <div
      v-if="stories.length"
      class="carousel--slider"
    >
      <slider
        ref="slider"
        :options="options"
        @slide="slide"
        @init="actionProgressBar"
      >
        <slideritem
          v-for="(slide, index) in stories"
          :key="index"
        >
          <img
            :src="slide.src"
            :alt="slide.altText"
            class="carousel--slider__image"
          >
        </slideritem>
      </slider>
    </div>
    <div class="carousel--footer" />
    <div
      class="carousel--panel"
    >
      <div
        :style="{ width: progressBarWidth + '%'}"
        class="carousel--panel__progress-bar"/>
      <div class="carousel--panel__container">
        <div class="carousel--panel__left">
          <div>
            <div class="carousel--panel--title">
              {{ selectedItem.title }}
            </div>
            <div class="carousel--panel--description">
              {{ selectedItem.description }}
            </div>
          </div>
          <ButtonIcon
            :href="selectedItem.buttonHref"
            width="wide"
            class="carousel--panel--cta"
          >{{ selectedItem.buttonText }}</ButtonIcon>
        </div>
        <div class="carousel--panel__right">
          <div class="carousel--panel--controls">
            <div
              class="carousel--panel--controls__control"
              tabindex="0"
              @click="prevStory"
              @keydown.13="prevStory"
            >
              <SvgIcon
                name="chevron-left"
                width="16"
                height="16"
              />
            </div>
            <div
              v-if="!paused"
              tabindex="0"
              class="carousel--panel--stop-pause carousel--panel--controls__control"
              @click="stopSliding"
              @keydown.13="stopSliding"
            >
              <SvgIcon
                name="pause"
                width="16"
                height="16"
              />
            </div>
            <div
              v-if="paused"
              tabindex="0"
              class="carousel--panel--stop-pause carousel--panel--controls__control"
              @click="startSliding"
              @keydown.13="startSliding"
            >
              <SvgIcon
                name="play"
                width="16"
                height="16"
              />
            </div>
            <div
              class="carousel--panel--controls__control"
              tabindex="0"
              @click="nextStory"
              @keydown.13="nextStory"
            >
              <SvgIcon
                name="chevron-right"
                width="16"
                height="16"
              />
            </div>
          </div>
          <div class="carousel--panel--stories-menu">
            <li
              v-for="(story, index) in storiesData"
              :key="index"
              tabindex="0"
              class="carousel--panel--stories-menu--item"
              @click="moveToStory(index)"
              @keydown.13="moveToStory(index)"
            >
              <div
                :class="{ 'carousel--panel--stories-menu__active': story.isActive }"
                class="carousel--panel--stories-menu--text">{{ story.title }}</div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import SvgIcon from '../icons/SvgIcon.vue';

const autoplay = 5000;

export default {
  components: {
    slider,
    slideritem,
    SvgIcon,
  },
  props: {
    stories: {
      type: Array,
      default: () => [{}],
    },
  },
  data() {
    return {
      selectedItem: this.stories && this.stories[0] ? this.stories[0] : {},
      selectedIndex: 0,
      openState: false,
      progressBarWidth: 0,
      countTime: 0,
      interval: null,
      paused: false,
      options: {
        currentPage: 0,
        pagination: false,
        thresholdDistance: 0, // Sliding distance threshold
        thresholdTime: 0, // Sliding time threshold decision
        grabCursor: false, // Scratch style
        speed: 300, // Sliding speed
        timingFunction: 'ease', // Sliding mode
        loop: true, // Infinite loop
        autoplay, // Auto play[ms]
        freeze: true,
      },
    };
  },
  computed: {
    storiesData() {
      const data = [];
      this.stories.forEach((item, index) => {
        data.push({
          ...item,
          isActive: index === this.selectedIndex,
        });
      });
      return data;
    },
  },
  methods: {
    slide(slide) {
      if (this.stories[slide.currentPage]) {
        this.selectedItem = this.stories[slide.currentPage];
        this.selectedIndex = slide.currentPage;
      }
      this.clearFrame();
    },
    stopSliding() {
      this.$refs.slider.$emit('autoplayStop');
      clearInterval(this.interval);
      this.paused = true;
    },
    startSliding() {
      this.$refs.slider.$emit('autoplayStart', autoplay - this.countTime);
      this.paused = false;
      this.actionProgressBar();
    },
    frame() {
      this.progressBarWidth = (this.countTime / autoplay * 100) + 5;
      this.countTime += 200;
    },
    actionProgressBar() {
      clearInterval(this.interval);
      this.interval = null;
      this.interval = setInterval(() => this.frame(), 200);
    },
    clearFrame() {
      if (!this.paused) {
        this.$refs.slider.$emit('autoplayStop');
        this.$refs.slider.$emit('autoplayStart', autoplay);
      }
      this.progressBarWidth = 0;
      this.countTime = 0;
    },
    prevStory() {
      this.$refs.slider.$emit('slidePre');
      this.progressBarWidth = 0;
      this.countTime = 0;
    },
    nextStory() {
      this.$refs.slider.$emit('slideNext');
      this.progressBarWidth = 0;
      this.countTime = 0;
    },
    moveToStory(storyIndex) {
      this.selectedItem = this.stories[storyIndex];
      this.selectedIndex = storyIndex;
      this.$refs.slider.$emit('slideTo', storyIndex);
    },
  },
};
</script>
