<template>
  <Video
    :video="{
      url: 'https://www.youtube.com/embed/MH5pJ4jokpI',
      duration: 28,
      preview: 'https://study.unimelb.edu.au/__data/assets/file/0022/265405/Byrd_Video.mp4',
    }"
    :poster="{
      src: 'https://study.unimelb.edu.au/__data/assets/image/0021/265404/Byrd_Advice.jpg',
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
