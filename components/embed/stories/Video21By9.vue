<template>
  <video-embed
    src="https://www.youtube.com/embed/nlF7qp5GNPI"
    ratio="21_9"
  />
</template>

<script>
import VideoEmbed from '../VideoEmbed.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { VideoEmbed },
  decorator: ContentBlock,
};
</script>
