<template>
  <VideoEmbed src="https://www.youtube.com/embed/sWHoKq6MSaE" />
</template>

<script>
import VideoEmbed from '../VideoEmbed.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';
import videoEmbedDocs from './videoEmbed.md';

export default {
  components: { VideoEmbed },
  decorator: ContentBlock,
  decoratorProps: { bg: 'inverted', size: 'sml' },
  readme: {
    custom: videoEmbedDocs, decorated: true, source: true, html: true,
  },
};
</script>
