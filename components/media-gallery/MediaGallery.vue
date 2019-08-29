<template>
  <div>
    <div
      :class="classes"
      role="region"
      aria-roledescription="Media gallery">
      <div :class="containerClasses">
        <div
          v-if="useOverlay"
          class="media-gallery__header">
          <div class="media-gallery__count">
            {{ selectedIndex + 1 }} / {{ items.length }}
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
            v-if="items.length"
            class="media-gallery__slider-container">
            <slider
              v-if="!useOverlay || openState"
              ref="slider"
              :options="options"
              @slide="slide"
            >
              <slideritem
                v-for="(slide, index) in items"
                :key="index"
                class="media-gallery__item">
                <div
                  v-if="slide.type === 'image'"
                  :aria-label="slide.altText"
                  :style="{ backgroundImage: `url(${slide.src})` }"
                  class="media-gallery__image" />
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
          v-if="items.length"
          ref="thumbnailContainer"
          :class="thumbClasses">
          <div
            v-for="(item, index) in items"
            :key="index"
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
          v-if="items.length"
          class="media-gallery__footer">
          <div
            v-if="!useOverlay"
            class="media-gallery__count media-gallery__count--footer"
          >{{ selectedIndex + 1 }} / {{ items.length }}</div>
          <div
            :id="'caption' + selectedIndex"
            class="media-gallery__title">{{ selectedItem.title }}</div>
          <div class="media-gallery__description">{{ selectedItem.description }}</div>
        </div>
      </div>
    </div>
    <ThumbnailGallery
      v-if="useOverlay"
      :use-overlay="useOverlay"
      :items="items"
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
      default: '4',
    },
    items: {
      type: Array,
      default: () => [],
    },
    useOverlay: {
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
      selectedItem: this.items ? this.items[0] : {},
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
        'media-gallery--overlay': this.useOverlay,
        'media-gallery--hide': this.useOverlay && !this.openState,
        'media-gallery--show': this.openState,
      };
    },
    sliderClasses() {
      return {
        'media-gallery__slider': true,
        'media-gallery__slider--overlay': this.useOverlay,
      };
    },
    containerClasses() {
      return {
        'media-gallery__container': true,
        'media-gallery__container--overlay': this.useOverlay,
      };
    },
    thumbClasses() {
      return {
        'media-gallery__thumbnails': true,
        'media-gallery__thumbnails--overlay': this.useOverlay,
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
      this.setSelectedItem(this.items[index]);

      this.setSelectedIndex(index);

      if (this.$refs.slider) {
        this.slideTo(index);

        this.scrollToView(index);

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
      const { items } = this;
      const currentIndex = this.getSelectedIndex();
      const nextIndex = this.getNextIndex(direction);
      const nextItem = items[nextIndex];

      this.setSelectedItem(nextItem);

      this.setSelectedIndex(nextIndex);

      if (this.$refs.slider) {
        this.slideTo(nextIndex);

        this.scrollToView(nextIndex);

        if (this.$refs.thumbnailContainer.childNodes[currentIndex].querySelector('iframe')) {
          this.stopVideo();
        }
      }
    },
    getNextIndex(direction) {
      const itemsLength = this.items.length;
      const currentIndex = this.getSelectedIndex();
      const directions = {
        prev: (currentIndex + itemsLength - 1) % itemsLength,
        next: (currentIndex + 1) % itemsLength,
      };

      const nextIndex = directions[direction];

      return nextIndex;
    },
    setSelectedItem(index) {
      this.selectedItem = index;
    },
    setSelectedIndex(index) {
      this.selectedIndex = index;
    },
    getSelectedIndex() {
      return this.selectedIndex;
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
      const { currentPage } = slide;

      this.scrollToView(currentPage);

      this.setSelectedItem(this.items[currentPage]);
      this.setSelectedIndex(currentPage);
    },
    slideTo(index) {
      this.$refs.slider.$emit('slideTo', index);
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
