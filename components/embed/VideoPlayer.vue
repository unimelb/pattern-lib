<template>
  <div
    :class="classes">
    <transition
      name="fade"
      @after-enter="afterEnter">
      <div
        v-if="!videoPlaying">
        <client-only v-if="poster">
          <progressive-img
            :src="poster.src"
            :alt="poster.alt || ''"
            class="video__img" />
        </client-only>
        <video
          v-if="isPreviewAutoplay"
          ref="videoPreview"
          muted
          playsinline
          webkit-playsinline
          class="video__preview">
          <source
            :src="video.preview"
            type="video/mp4">
        </video>
        <button
          ref="playVideo"
          class="video__btn"
          :aria-label="`Play ${label !== 'Play' ? label : ''} ${formattedDuration ? formattedDuration : ''} video`"
          :aria-describedby="describedby"
          @click="startAutoplay"
          @mouseleave="leaveVideo"
          @mouseover="hoverVideo">
          <span class="video__btn-label">
            {{ label }} <template v-if="video.duration"><!--
              -->({{ formattedDuration }})
            </template><svg
              focusable="false"
              role="presentation">
              <use
                :xlink:href="`#icon-play-circle`"
                xmlns:xlink="http://www.w3.org/1999/xlink" />
            </svg>
          </span>
          <svg
            v-if="orientation !== 'portrait'"
            focusable="false"
            role="presentation"
            class="video__btn-play-icon">
            <use
              :xlink:href="`#icon-play-circle`"
              xmlns:xlink="http://www.w3.org/1999/xlink" />
          </svg>
        </button>
      </div>
      <iframe
        v-else-if="videoPlaying"
        ref="embed"
        :title="label !== 'Play' ? `${label} - video` : 'Video'"
        width="560"
        height="315"
        :src="videoSrcWithParams"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="video__embed"
        tabindex="0" />
    </transition>
    <transition name="fade">
      <button
        v-if="videoPlaying"
        type="button"
        aria-label="Close video"
        class="video__close"
        @click="stopAutoplay">
        <span class="screenreaders-only">Close</span>
        <svg
          width="16"
          height="16"
          aria-label="close"
          focusable="false"
          role="img"><use xlink:href="#icon-close" /></svg>
      </button>
    </transition>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import { TIMER_100 } from '../../constants/timers';

export default {
  props: {
    label: {
      type: String,
      required: false,
      default: 'Play',
    },
    poster: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    video: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    orientation: {
      type: String,
      required: false,
      default: 'landscape',
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false,
    },
    videoApi: {
      type: Boolean,
      required: false,
      default: false,
    },
    describedby: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      videoPlaying: false,
      isInViewport: false,
      videoSrc: '',
    };
  },
  computed: {
    formattedDuration() {
      const duration = this.video ? this.video.duration : null;
      const secNum = parseInt(duration, 10);
      const hours = Math.floor(secNum / 3600); // eslint-disable-line no-magic-numbers
      const minutes = Math.floor((secNum - (hours * 3600)) / 60); // eslint-disable-line no-magic-numbers
      const seconds = secNum - (hours * 3600) - (minutes * 60); // eslint-disable-line no-magic-numbers

      return (hours ? `${hours}h ` : '') + (minutes ? `${minutes}m ` : '') + (seconds ? `${seconds}s` : '');
    },
    videoSrcWithParams() {
      if (!this.videoSrc) {
        return '';
      }

      const additionalParams = this.videoApi ? `&enablejsapi=1&origin=https%3A%2F%2F${document.location.hostname}` : '';

      return `${this.video.url}?autoplay=1&rel=0${additionalParams}`;
    },
    classes() {
      return {
        video: true,
        'video--portrait': this.orientation === 'portrait',
      };
    },
    isPreviewAutoplay() {
      return this.video.preview && this.autoplay;
    },
  },
  watch: {
    isInViewport(value) {
      if (value) {
        this.resetVideoPreviewTime();
        this.playVideoPreview();
      }
    },
  },
  async mounted() {
    if (this.isPreviewAutoplay) {
      this.debouncedMediaGalleryScrollEvent = debounce(this.checkInViewport, TIMER_100);
      window.addEventListener('scroll', this.debouncedMediaGalleryScrollEvent);
      this.$refs.videoPreview.addEventListener('ended', this.resetVideoPreviewTime);
    }

    // Detect if YouTube/Vimeo and Youku URLs are present
    if (this.video && this.video.url && this.video.youkuUrl) {
      this.$nextTick(async () => {
        this.videoSrc = await this.getVideoSrcFromRegion();
      });
    } else if (this.video && this.video.url) {
      this.videoSrc = this.video.url;
    }
  },
  beforeDestroy() {
    if (this.isPreviewAutoplay) {
      window.removeEventListener('scroll', this.debouncedMediaGalleryScrollEvent);
      this.$refs.videoPreview.removeEventListener('ended', this.resetVideoPreviewTime);
    }
  },
  methods: {
    hoverVideo() {
      if (this.isPreviewAutoplay) {
        this.$refs.videoPreview.addEventListener('ended', this.hoverVideo);
        this.playVideoPreview();
      }
    },
    playVideoPreview() {
      this.$emit('autoplay');
      this.$refs.videoPreview.play();
    },
    pauseVideoPreview() {
      this.$refs.videoPreview.pause();
    },
    resetVideoPreviewTime() {
      this.$refs.videoPreview.currentTime = 0;
    },
    leaveVideo() {
      if (this.isPreviewAutoplay) {
        this.pauseVideoPreview();
        this.resetVideoPreviewTime();
      }
    },
    afterEnter(el) {
      el.focus();
    },
    startAutoplay() {
      this.videoPlaying = true;
    },
    stopAutoplay() {
      this.videoPlaying = false;
      setTimeout(() => {
        this.$refs.playVideo.focus();
      }, TIMER_100);
    },
    checkInViewport() {
      const elementToCheck = this.$refs.videoPreview;
      const isInViewport = this.isAnyPartOfElementInViewport(elementToCheck);

      this.isInViewport = isInViewport;
    },
    isAnyPartOfElementInViewport(el) {
      const elementRect = el.getBoundingClientRect();

      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

      const offsetTop = 0;
      const offsetLeft = 0;

      const vertInView = (elementRect.top <= windowHeight) && ((elementRect.top + elementRect.height) >= offsetTop);
      const horInView = (elementRect.left <= windowWidth) && ((elementRect.left + elementRect.width) >= offsetLeft);

      return (vertInView && horInView);
    },
    getVideoSrcFromRegion() {
      return new Promise((resolve) => {
        const image = new Image();

        image.onload = () => {
          resolve(this.video.url);
        };
        image.onerror = () => {
          resolve(this.video.youkuUrl);
        };

        image.src = 'https://youtube.com/favicon.ico';
      });
    },
  },
};
</script>
