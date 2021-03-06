<template>
  <section
    class="carousel"
    aria-label="Stories and events Carousel">
    <div
      v-if="stories.length"
      class="carousel__slider">
      <div class="carousel__prevent-click" />
      <slider
        ref="slider"
        :options="options"
        @slide="slide">
        <slideritem
          v-for="(slideItem, index) in stories"
          :key="index">
          <div
            :style="image[index]"
            :aria-label="slideItem.altText"
            class="carousel__image" />
        </slideritem>
      </slider>
    </div>
    <div
      class="carousel__panel">
      <div class="carousel__progress-bar">
        <div
          :style="{ width: progressBarWidth + '%' }"
          class="carousel__progress-bar-status" />
      </div>
      <div class="carousel__panel-container">
        <div
          class="carousel__aside"
          role="navigation"
          aria-label="Stories">
          <ul
            class="carousel__navigation"
            role="menu">
            <li
              v-for="(story, index) in storiesData"
              :key="index"
              class="carousel__navigation-item list-reset"
              role="none">
              <a
                :class="{ 'carousel__navigation-link--active': story.isActive }"
                class="carousel__navigation-link"
                href="javascript: void(0);"
                role="menuitem"
                @click="moveToStory(index)"
                @focusin="stopSliding"
                @keydown.enter="moveToStory(index)"
                @keydown.space="moveToStory(index)">
                {{ story.title | truncate(48) }}
              </a>
            </li>
          </ul>
          <div class="carousel__controls">
            <div
              :aria-label="'Previous: ' + prevTitle"
              class="carousel__controls-item"
              tabindex="0"
              role="button"
              @click="prevStory"
              @keydown.enter="prevStory"
              @keydown.space="prevStory"
              @focusin="stopSliding">
              <SvgIcon
                name="chevron-left"
                width="16"
                height="16"
                aria-hidden="true" />
            </div>
            <div
              v-if="!paused"
              tabindex="0"
              class="carousel__controls-item carousel__controls-stop-pause"
              data-message="Play"
              role="button"
              aria-label="Stop carousel"
              @click="stopSliding"
              @keydown.enter="stopSliding"
              @keydown.space="stopSliding">
              <SvgIcon
                name="pause"
                width="16"
                height="16"
                aria-hidden="true" />
            </div>
            <div
              v-if="paused"
              tabindex="0"
              class="carousel__controls-item"
              data-message="Pause"
              role="button"
              aria-label="Play carousel"
              @click="startSliding"
              @focusin="stopSliding"
              @keydown.enter="startSliding"
              @keydown.space="startSliding">
              <SvgIcon
                name="play"
                width="16"
                height="16"
                aria-hidden="true" />
            </div>
            <div
              :aria-label="'Next: ' + nextTitle"
              class="carousel__controls-item"
              tabindex="0"
              role="button"
              @click="nextStory"
              @keydown.enter="nextStory"
              @keydown.space="nextStory"
              @focusin="stopSliding">
              <SvgIcon
                name="chevron-right"
                width="16"
                height="16"
                aria-hidden="true" />
            </div>
          </div>
        </div>
        <div
          :aria-live="!paused ? 'off' : 'polite'"
          class="carousel__content"
          role="navigation"
          aria-label="Stories">
          <div class="carousel__story">
            <h2 class="carousel__title">
              <a
                :href="selectedItem.buttonHref"
                class="carousel__title-link"
                @focusin="stopSliding">
                {{ selectedItem.title | truncate(48) }}
              </a>
            </h2>
            <p class="carousel__description">
              {{ selectedItem.description | truncate(240, '...') }}
            </p>
            <div
              @focusin="stopSliding">
              <ButtonIcon
                :href="selectedItem.buttonHref"
                inverted
                width="wide"
                role="button"
                size="sml">
                {{ selectedItem.buttonText }}
              </ButtonIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import SvgIcon from '../icons/SvgIcon.vue';
import ButtonIcon from '../buttons/ButtonIcon.vue';

import { TIMER_1100, TIMER_200 } from '../../constants/timers';

export default {
  components: {
    slider,
    slideritem,
    SvgIcon,
    ButtonIcon,
  },
  filters: {
    truncate(value, limit, ellipsis = '') {
      const startFromIndex = 0;

      if (!value) {
        return '';
      }

      if (value.length < limit) {
        return value;
      }

      return `${value.substring(startFromIndex, limit)}${ellipsis}`;
    },
  },
  props: {
    stories: {
      type: Array,
      default: () => [],
      validator: (stories) => {
        const maxStories = 3;

        return stories.length <= maxStories;
      },
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
      image: {},
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
  created() {
    const startFromPositionIndex = 0;

    this.displayImageAtPosition(startFromPositionIndex);
  },
  mounted() {
    this.loadImg();
    setTimeout(() => {
      this.actionProgressBar();
    }, TIMER_1100);
  },
  methods: {
    displayImageAtPosition(index) {
      this.image[index] = {
        backgroundImage: `url(${this.stories[index].src})`,
        backgroundPosition: this.stories[index].imagePosition ? this.stories[index].imagePosition : 'center',
      };
    },
    loadImg() {
      setTimeout(() => {
        for (let i = 1; i < this.stories.length; i += 1) {
          this.displayImageAtPosition(i);
        }
      }, TIMER_1100);
    },
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
      const initialWidth = 5;
      const percent = 100;

      this.progressBarWidth = Math.round((this.countTime / this.autoplay) * percent) + initialWidth;
      this.countTime += 200;
    },
    actionProgressBar() {
      clearInterval(this.interval);
      this.interval = null;
      this.interval = setInterval(() => this.frame(), TIMER_200);
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
      this.displayImageAtPosition(storyIndex);
      this.selectedItem = this.stories[storyIndex];
      this.selectedIndex = storyIndex;
      this.$refs.slider.$emit('slideTo', storyIndex);
      document.querySelector('.carousel__title').focus();
    },
  },
};
</script>
