<template>
  <div>
    <div
      :class="classes"
      role="region"
      aria-roledescription="Media gallery">
      <div :class="containerClasses">
        <div
          v-if="overlay"
          class="media-gallery__header">
          <div class="media-gallery__count">
            {{ selectedIndex + 1 }} / {{ media.length }}
          </div>
          <div
            class="media-gallery__close"
            tabindex="0"
            title="Close (Esc)"
            @click="openStateToggle()"
            @keydown.13="openStateToggle()"
            @keydown.32="openStateToggle()"
          >
            <SvgIcon
              aria-hidden="true"
              name="close"
              width="26"
              height="26"/>
          </div>
        </div>
        <div :class="sliderClasses">
          <div
            class="media-gallery__button media-gallery__button--prev"
            role="button"
            tabindex="0"
            title="Previous (arrow left)"
            @click="move('prev')"
            @keydown.13="move('prev')"
            @keydown.32="move('prev')"
          >
            <SvgIcon
              aria-hidden="true"
              name="chevron-left"
              width="30"
              height="30"/>
          </div>
          <div
            v-if="media.length"
            class="media-gallery__slider-container">
            <slider
              v-if="inPage || openState"
              ref="slider"
              :options="options"
              @slide="slide"
            >
              <slideritem
                v-for="(slide, index) in media"
                :key="index"
                class="media-gallery__item">
                <img
                  v-if="slide.type === 'image'"
                  :src="slide.src"
                  :alt="slide.altText"
                  class="media-gallery__image"
                >
                <VideoEmbed
                  v-if="slide.type === 'video'"
                  :src="slide.src"
                  class="media-gallery__embed" />
              </slideritem>
            </slider>
          </div>
          <div
            class="media-gallery__button media-gallery__button--next"
            tabindex="0"
            role="button"
            title="Next (arrow right)"
            @click="move('next')"
            @keydown.13="move('next')"
            @keydown.32="move('next')"
          >
            <SvgIcon
              aria-hidden="true"
              name="chevron-right"
              width="30"
              height="30"/>
          </div>
        </div>

        <div
          v-if="media.length"
          ref="thumbnailContainer"
          :class="thumbClasses">
          <div
            v-for="(item, index) in media"
            :key="item.id"
            :class="{ active: index === selectedIndex}"
            :aria-label="item.title + '. ' + item.description"
            class="media-gallery__thumb"
            tabindex="0"
            role="button"
            @click="open(index)"
          >
            <img
              v-if="item.type === 'image'"
              :src="item.src"
              :alt="item.altText"
              aria-hidden="true"
              class="media-gallery__thumb-image"
            >
            <div
              v-if="item.type === 'video'"
              aria-hidden="true"
              class="media-gallery__thumb-embed">
              <VideoEmbed
                :src="item.src"
                class="media-gallery__thumb-video" />
            </div>
          </div>
        </div>

        <div
          v-if="media.length"
          class="media-gallery__footer">
          <div
            v-if="inPage"
            class="media-gallery__count media-gallery__count--footer"
          >{{ selectedIndex + 1 }} / {{ media.length }}</div>
          <div
            :id="'caption' + selectedIndex"
            class="media-gallery__title">{{ selectedItem.title }}</div>
          <div class="media-gallery__description">{{ selectedItem.description }}</div>
        </div>
      </div>
    </div>
    <ThumbnailGallery
      v-if="overlay"
      :overlay="overlay"
      :media="media"
      :callback="openThumb"
      :display-caption="displayCaption"
      :columns="columns"
    />
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import VideoEmbed from '../embed/VideoEmbed.vue';
import SvgIcon from '../icons/SvgIcon.vue';
import ThumbnailGallery from './ThumbnailGallery.vue';

export default {
  components: {
    VideoEmbed,
    slider,
    slideritem,
    SvgIcon,
    ThumbnailGallery,
  },
  props: {
    columns: {
      type: String,
      default: '1',
    },
    media: {
      type: Array,
      default: () => [],
    },
    inPage: {
      type: Boolean,
      default: false,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    displayCaption: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedItem: this.media ? this.media[0] : {},
      selectedIndex: 0,
      openState: false,
      options: {
        currentPage: 0,
        pagination: false,
        thresholdDistance: 100, // Sliding distance threshold
        thresholdTime: 300, // Sliding time threshold decision
        grabCursor: true, // Scratch style
        speed: 500, // Sliding speed
        timingFunction: 'ease', // Sliding mode
        itemAnimation: true,
      },
    };
  },
  computed: {
    classes() {
      return {
        'media-gallery': true,
        'media-gallery--hide': this.overlay && !this.openState,
        'media-gallery--show': this.openState,
      };
    },
    sliderClasses() {
      return {
        'media-gallery__slider': true,
        'media-gallery__slider--overlay': this.overlay,
      };
    },
    containerClasses() {
      return {
        'media-gallery__container': true,
        'media-gallery__container--overlay': this.overlay,
      };
    },
    thumbClasses() {
      return {
        'media-gallery__thumbnails': true,
        'media-gallery__thumbnails--overlay': this.overlay,
      };
    },
  },
  created() {
    window.addEventListener('keyup', this.keyBoardActions);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyBoardActions);
  },
  methods: {
    open(index) {
      this.selectedItem = this.media[index];
      this.selectedIndex = index;
      if (this.$refs.slider) {
        this.$refs.slider.$emit('slideTo', index);
        if (this.$refs.thumbnailContainer.childNodes[index].querySelector('iframe')) {
          this.stopVideo();
        }
      }
    },
    openThumb(index) {
      this.options.currentPage = index;
      this.openStateToggle();
    },
    openStateToggle() {
      this.openState = !this.openState;

      this.toggleNoScroll();
    },
    move(direction) {
      const len = this.media.length;
      const current = this.selectedIndex;
      const directions = {
        prev: (current + len - 1) % len,
        next: (current + 1) % len,
      };
      const nextIndex = directions[direction];
      this.selectedItem = this.media[nextIndex];
      this.selectedIndex = nextIndex;
      if (this.$refs.slider) {
        this.$refs.slider.$emit('slideTo', nextIndex);
        this.scrollToView(nextIndex);
        if (this.$refs.thumbnailContainer.childNodes[current].querySelector('iframe')) {
          this.stopVideo();
        }
      }
    },
    // Scroll active thumbnail into view
    scrollToView(nextIndex) {
      this.$refs.thumbnailContainer.childNodes[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    },
    stopVideo() {
      const iframe = document.querySelectorAll('iframe');
      if (iframe.length > 0) {
        iframe.forEach((element) => {
          const iframeSrc = element.src;
          element.src = iframeSrc;
        });
      }
    },
    slide(slide) {
      this.selectedItem = this.media[slide.currentPage];
      this.selectedIndex = slide.currentPage;
    },
    keyBoardActions(e) {
      if (e.keyCode === 37) {
        this.move('prev');
      }
      if (e.keyCode === 39) {
        this.move('next');
      }
      if (e.keyCode === 27) {
        this.openState = false;
      }
    },
    toggleNoScroll() {
      document.documentElement.classList.toggle('no-body-scroll');
    },
  },
};
</script>
