<template>
  <div
    :class="classes">
    <transition
      name="fade"
      @after-enter="afterEnter">
      <div
        v-if="!videoPlaying">
        <progressive-img
          v-if="poster"
          :src="poster.src"
          :alt="poster.alt || ''"
          class="video__img" />
        <video
          v-if="video.preview && autoplay"
          muted
          autoplay
          loop
          playsinline
          webkit-playsinline
          class="video__preview">
          <source
            :src="video.preview"
            type="video/mp4">
        </video>
        <button
          class="video__btn"
          aria-label="Play video - plays embed automatically"
          @click="startAutoplay"
          @mouseover="$emit('autoplay')">
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
        title="Youtube video"
        width="560"
        height="315"
        :src="videoSrc"
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
  },
  data() {
    return {
      videoPlaying: false,
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
    videoSrc() {
      if (!this.video || !this.video.url) {
        return '';
      }

      const additionalParams = this.videoApi ? `&enablejsapi=1&origin=https%3A%2F%2F${document.location.hostname}` : '';

      return `${this.video.url}?autoplay=1${additionalParams}`;
    },
    classes() {
      return {
        video: true,
        'video--portrait': this.orientation === 'portrait',
      };
    },
  },
  methods: {
    afterEnter(el) {
      el.focus();
    },
    startAutoplay() {
      this.$emit('autoplay');
      this.videoPlaying = true;
    },
    stopAutoplay() {
      this.videoPlaying = false;
    },
  },
};
</script>
