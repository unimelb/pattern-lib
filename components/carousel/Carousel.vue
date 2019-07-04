<template>
  <section
    class="carousel"
    aria-roledescription="carousel"
    aria-label="Stories and events">
    <div
      v-if="stories.length"
      class="carousel__slider"
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
            class="carousel__slider__image"
          >
        </slideritem>
      </slider>
    </div>
    <div class="carousel__footer" />
    <div
      class="carousel__panel"
    >
      <div
        :style="{ width: progressBarWidth + '%'}"
        class="carousel__panel__progress-bar"/>
      <div class="carousel__panel__container">
        <div
          class="carousel__panel--right"
          role="navigation"
          aria-label="Stories"
        >
          <div
            class="carousel__panel--stories-menu"
            role="menu">
            <a
              v-for="(story, index) in storiesData"
              :key="index"
              class="carousel__panel--stories-menu--item"
              href="javascript: void(0);"
              role="menuitem"
              @click="moveToStory(index)"
              @keydown.13="moveToStory(index)"
              @keydown.32="moveToStory(index)"
            >
              <span
                :class="{ 'carousel__panel--stories-menu__active': story.isActive }"
                class="carousel__panel--stories-menu__text">
                {{ story.title }}
              </span>
            </a>
          </div>
          <div class="carousel__panel--controls">
            <div
              :aria-label="'Previous: ' + prevTitle"
              class="carousel__panel--controls__control"
              tabindex="0"
              role="button"
              @click="prevStory"
              @keydown.13="prevStory"
              @keydown.32="prevStory"
              @focusin="stopSliding"
              @focusout="startSliding"
            >
              <SvgIcon
                name="chevron-left"
                width="16"
                height="16"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="!paused"
              tabindex="0"
              class="carousel__panel--stop-pause carousel__panel--controls__control"
              data-message="Play"
              role="button"
              @click="stopSliding"
              @keydown.13="stopSliding"
              @keydown.32="stopSliding"
            >
              <SvgIcon
                name="pause"
                width="16"
                height="16"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="paused"
              tabindex="0"
              class="carousel__panel--stop-pause carousel__panel--controls__control"
              data-message="Pause"
              role="button"
              @click="startSliding"
              @keydown.13="startSliding"
              @keydown.32="startSliding"
            >
              <SvgIcon
                name="play"
                width="16"
                height="16"
                aria-hidden="true"
              />
            </div>
            <div
              :aria-label="'Next: ' + nextTitle"
              class="carousel__panel--controls__control"
              tabindex="0"
              role="button"
              @click="nextStory"
              @keydown.13="nextStory"
              @keydown.32="nextStory"
              @focusin="stopSliding"
              @focusout="startSliding"
            >
              <SvgIcon
                name="chevron-right"
                width="16"
                height="16"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div
          :aria-live="!paused ? 'off' : 'polite'"
          class="carousel__panel--left"
          role="navigation"
          aria-label="Stories">
          <div class="carousel__panel__story">
            <h2
              class="carousel__panel__title">
              <a
                :href="selectedItem.buttonHref"
                @focusin="stopSliding"
                @focusout="startSliding"
              >
                {{ selectedItem.title }}
              </a>
            </h2>
            <p class="carousel__panel__description">
              {{ selectedItem.description }}
            </p>
          </div>
          <div
            tabindex="0"
            @focusin="stopSliding"
            @focusout="startSliding"
          >
            <ButtonIcon
              :href="selectedItem.buttonHref"
              width="wide"
              class="carousel__panel--cta"
              role="button"
            >
              {{ selectedItem.buttonText }}
            </ButtonIcon>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    slider,
    slideritem,
    SvgIcon,
  },
  props: {
    stories: {
      type: Array,
      default: () => [],
      validator: stories => stories.length <= 3,
      required: true,
    },
    timing: {
      type: String,
      default: 'short',
    },
  },
  data() {
    const timing = {
      medium: 16000,
      long: 20000,
      def: 12000,
    };
    const autoplay = this.timing && timing[this.timing] ? timing[this.timing] : timing.def;

    return {
      prevTitle: this.stories && this.stories[0] ? this.stories[this.stories.length - 1].title : {},
      nextTitle: this.stories && this.stories[1] ? this.stories[1].title : {},
      selectedItem: this.stories && this.stories[0] ? this.stories[0] : {},
      selectedIndex: 0,
      openState: false,
      progressBarWidth: 0,
      countTime: 0,
      interval: null,
      paused: false,
      autoplay,
      options: {
        effect: 'fade',
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
        this.prevTitle = this.stories[this.selectedIndex - 1] ? this.stories[this.selectedIndex - 1].title : this.stories[this.stories.length - 1].title;
        this.nextTitle = this.stories[this.selectedIndex + 1] ? this.stories[this.selectedIndex + 1].title : this.stories[0].title;
      }
      this.clearFrame();
    },
    stopSliding() {
      this.$refs.slider.$emit('autoplayStop');
      clearInterval(this.interval);
      this.paused = true;
    },
    startSliding() {
      this.$refs.slider.$emit('autoplayStart', this.autoplay - this.countTime);
      this.paused = false;
      this.actionProgressBar();
    },
    frame() {
      this.progressBarWidth = (this.countTime / this.autoplay * 100) + 5;
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
        this.$refs.slider.$emit('autoplayStart', this.autoplay);
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
      document.querySelector('.carousel__panel--cta').focus();
    },
  },
};
</script>
