<template>
  <Video
    :video="{
      url: 'https://www.youtube.com/embed/MH5pJ4jokpI',
      duration: 28,
      preview: 'https://player.vimeo.com/external/336863136.sd.mp4?s=234cbb2adf6f8c523093bc0627e7d8bdb697db94&amp;profile_id=165',
    }"
    :poster="{
      src: 'https://www.brown.edu/sites/g/files/dprerj316/files/styles/portrait_sfts_desktop/public/Byrd_Advice.jpg?h=30f5acd3&itok=hcyHpFiN',
      alt: '',
    }"
    orientation="portrait"
    autoplay />
</template>

<script>
import MaxWidthDecorator from 'storybook/decorators/MaxWidthDecorator.vue';
import Video from '../Video.vue';
import videoDocs from './video.md';

export default {
  components: { Video },
  readme: { custom: videoDocs, html: true },
  decorator: MaxWidthDecorator,
  decoratorProps: { maxWidth: 18 },
};
</script>
