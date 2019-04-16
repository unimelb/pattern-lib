<template>
  <div>
    <div :class="classes">
      <div
        v-if="popOver"
        class="photo-gallery--pop-over__media-count">
        {{ selectedIndex + 1 }} / {{ media.length }}
        <div
          class="photo-gallery--pop-over__close"
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
          class="arrow-wrapper"
          role="button"
          tabindex="0"
          title="Previous (arrow left)"
          @click="move('prev')"
          @keydown.13="move('prev')"
        >
          <SvgIcon
            class="photo-gallery__chevron"
            name="chevron-left"
            width="30"
            height="30"/>
        </div>
        <div
          v-if="media.length"
          :class="containerClasses">
          <slider
            ref="slider"
            :options="options"
            @slide="slide">
            <slideritem
              v-for="(slide, index) in media"
              :key="index"
              class="photo-gallery__figure">
              <img
                v-if="slide.type === 'image'"
                :src="slide.src"
                :alt="slide.altText">
              <VideoEmbed
                v-if="slide.type === 'video'"
                :src="slide.src"/>
            </slideritem>
          </slider>
        </div>
        <div
          class="arrow-wrapper"
          tabindex="0"
          role="button"
          title="Next (arrow right)"
          @click="move('next')"
          @keydown.13="move('next')"
        >
          <SvgIcon
            class="photo-gallery__chevron"
            name="chevron-right"
            width="30"
            height="30"/>
        </div>
      </div>
      <figure v-if="media.length">
        <div :class="thumbClasses">
          <div
            v-for="(item, index) in media"
            :key="item.id"
            :class="{ active: index === selectedIndex}"
            :aria-describedby="'caption' + selectedIndex"
            class="thumb"
            tabindex="0"
            role="button"
            @click="open(index)"
            @keydown.13="open(index)"
          >
            <img
              v-if="item.type === 'image'"
              :src="item.src"
              :alt="item.altText">
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
          class="photo-gallery__media-count"
        >{{ selectedIndex + 1 }} / {{ media.length }}</div>
        <figcaption
          :id="'caption' + selectedIndex"
          :class="titleClasses">{{ selectedItem.title }}</figcaption>
        <div :class="descriptionClasses">{{ selectedItem.description }}</div>
      </figure>
    </div>
    <Thumbnails
      v-if="popOver"
      :media="media"
      :callback="openThumb"
      :display-caption="displayCaption"
    />
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import VideoEmbed from '../embed/VideoEmbed.vue';
import SvgIcon from '../icons/SvgIcon.vue';
import Thumbnails from './Thumbnails.vue';

export default {
  components: {
    VideoEmbed,
    slider,
    slideritem,
    SvgIcon,
    Thumbnails,
  },
  props: {
    media: {
      type: Array,
      default: () => [],
    },
    inPage: {
      type: Boolean,
      default: false,
    },
    popOver: {
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
        speed: 300, // Sliding speed
        // timingFunction: 'ease', // Sliding mode
        // loop: false, // Infinite loop
        // autoplay: 0 // Auto play[ms]
      },
    };
  },
  computed: {
    classes() {
      return {
        'photo-gallery': true,
        'photo-gallery--pop-over': this.popOver,
        'photo-gallery--pop-over__open': this.openState,
      };
    },
    sliderClasses() {
      return {
        'photo-gallery__slider': true,
        'photo-gallery--pop-over__slider': this.popOver,
      };
    },
    containerClasses() {
      return {
        'photo-gallery__container': true,
        'photo-gallery--pop-over__container': this.popOver,
      };
    },
    thumbClasses() {
      return {
        'photo-gallery__thumbnails': true,
        'photo-gallery--pop-over__thumbnails': this.popOver,
      };
    },
    titleClasses() {
      return {
        'photo-gallery__title': true,
        'photo-gallery--pop-over__title': this.popOver,
      };
    },
    descriptionClasses() {
      return {
        'photo-gallery__description': true,
        'photo-gallery--pop-over__description': this.popOver,
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
      this.$refs.slider.$emit('slideTo', index);
    },
    openThumb(index) {
      this.openStateToggle();
      setTimeout(() => this.open(index), 10);
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
      this.$refs.slider.$emit('slideTo', nextIndex);
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
