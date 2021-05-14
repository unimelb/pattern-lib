<template>
  <VideoPlayer
    label="Video label"
    :video="{
      url: 'https://www.youtube.com/embed/sWHoKq6MSaE',
      duration: 144,
    }"
    :poster="{
      src: 'https://picsum.photos/seed/1/540/360',
      alt: 'Test alt',
    }" />
</template>

<script>
import MaxWidthDecorator from 'storybook/decorators/MaxWidthDecorator.vue';
import VideoPlayer from '../VideoPlayer.vue';
import videoDocs from './video.md';

export default {
  components: { VideoPlayer },
  readme: { custom: videoDocs, html: true },
  decorator: MaxWidthDecorator,
};
</script>
