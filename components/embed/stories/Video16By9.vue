<template>
  <VideoEmbed src="https://www.youtube.com/embed/nlF7qp5GNPI" />
</template>

<script>
import VideoEmbed from '../VideoEmbed.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { VideoEmbed },
  readme: { source: true, html: true },
  decorator: ContentBlock,
};
</script>
