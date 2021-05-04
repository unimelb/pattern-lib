<template>
  <VideoFullWidth
    :video="{
      url: 'https://www.youtube.com/embed/sWHoKq6MSaE',
      duration: 144,
    }"
    :poster="{
      src: 'https://picsum.photos/seed/1/1200/675',
      alt: '',
    }" />
</template>

<script>
import VideoFullWidth from '../VideoFullWidth.vue';
import videoDocs from './video.md';

export default {
  components: { VideoFullWidth },
  readme: { custom: videoDocs, html: true },
};
</script>
