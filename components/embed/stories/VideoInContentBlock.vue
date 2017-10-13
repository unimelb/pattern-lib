<template>
  <video-embed src="https://www.youtube.com/embed/nlF7qp5GNPI" />
</template>

<script>
import VideoEmbed from '../VideoEmbed.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { VideoEmbed },
  decorator: ContentBlock,
  decoratorProps: { bg: 'inverted', size: 'sml' },
};
</script>
