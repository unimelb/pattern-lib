<template>
  <VideoEmbed
    video-api
    src="https://www.youtube.com/embed/sWHoKq6MSaE" />
</template>

<script>
import VideoEmbed from '../VideoEmbed.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';
import videoEmbedDocs from './videoEmbed.md';

export default {
  components: { VideoEmbed },
  readme: { custom: videoEmbedDocs, source: true, html: true },
  decorator: ContentBlock,
};
</script>
