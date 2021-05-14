<template>
  <div class="video-full-width">
    <div class="video-full-width__bg">
      <progressive-img
        v-if="poster"
        :src="poster.src"
        alt=""
        role="presentation"
        no-ratio
        class="video-full-width__bg-img" />
    </div>
    <div class="video-full-width__inner">
      <VideoPlayer
        :label="label"
        :poster="poster"
        :video="video"
        :autoplay="autoplay"
        :video-api="videoApi" />
    </div>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer.vue';

export default {
  components: {
    VideoPlayer,
  },
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
};
</script>
