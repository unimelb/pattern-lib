<template>
  <div>
    <div :class="classes">
      <div
        v-if="overlay"
        class="media-gallery--overlay__media-count">
        {{ selectedIndex + 1 }} / {{ media.length }}
        <div
          class="media-gallery--overlay__close"
          tabindex="0"
          title="Close (Esc)"
          @click="openStateToggle()"
          @keydown.13="openStateToggle()"
        >
          <SvgIcon
            name="close"
            width="32"
            height="32"/>
        </div>
      </div>
      <div :class="sliderClasses">
        <div
          class="media-gallery__arrow-wrapper"
          role="button"
          tabindex="0"
          title="Previous (arrow left)"
          @click="move('prev')"
          @keydown.13="move('prev')"
        >
          <SvgIcon
            class="media-gallery__chevron"
            name="chevron-left"
            width="30"
            height="30"/>
        </div>
        <div
          v-if="media.length"
          :class="containerClasses">
          <slider
            v-if="inPage || openState"
            ref="slider"
            :options="options"
            @slide="slide"
          >
            <slideritem
              v-for="(slide, index) in media"
              :key="index"
              class="media-gallery__figure">
              <img
                v-if="slide.type === 'image'"
                :src="slide.src"
                :alt="slide.altText"
                class="media-gallery__slider-image"
              >
              <VideoEmbed
                v-if="slide.type === 'video'"
                :src="slide.src"/>
            </slideritem>
          </slider>
        </div>
        <div
          class="media-gallery__arrow-wrapper"
          tabindex="0"
          role="button"
          title="Next (arrow right)"
          @click="move('next')"
          @keydown.13="move('next')"
        >
          <SvgIcon
            class="media-gallery__chevron"
            name="chevron-right"
            width="30"
            height="30"/>
        </div>
      </div>
      <figure v-if="media.length">
        <div
          ref="thumbnailContainer"
          :class="thumbClasses">
          <div
            v-for="(item, index) in media"
            :key="item.id"
            :class="{ active: index === selectedIndex}"
            :aria-describedby="'caption' + selectedIndex"
            class="media-gallery__thumbnails--thumb"
            tabindex="0"
            role="button"
            @click="open(index)"
            @keydown.13="open(index)"
          >
            <img
              v-if="item.type === 'image'"
              :src="item.src"
              :alt="item.altText"
              class="media-gallery__thumbnails--image"
            >
            <div
              v-if="item.type === 'video'"
              class="embed--video">
              <div class="embed--cover"/>
              <VideoEmbed :src="item.src"/>
            </div>
          </div>
        </div>
        <div
          v-if="inPage"
          class="media-gallery__media-count"
        >{{ selectedIndex + 1 }} / {{ media.length }}</div>
        <figcaption
          :id="'caption' + selectedIndex"
          class="media-gallery__title">{{ selectedItem.title }}</figcaption>
        <div class="media-gallery__description">{{ selectedItem.description }}</div>
      </figure>
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
        'media-gallery--overlay': this.overlay,
        'media-gallery--overlay__open': this.openState,
      };
    },
    sliderClasses() {
      return {
        'media-gallery__slider': true,
        'media-gallery--overlay__slider': this.overlay,
      };
    },
    containerClasses() {
      return {
        'media-gallery__container': true,
        'media-gallery--overlay__container': this.overlay,
      };
    },
    thumbClasses() {
      return {
        'media-gallery__thumbnails': true,
        'media-gallery--overlay__thumbnails': this.overlay,
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
  },
};
</script>
