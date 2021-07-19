<template>
  <div>
    <h3 class="heading-section">
      Section with video embed
    </h3>
    <VideoEmbed src="https://www.youtube.com/embed/sWHoKq6MSaE" />
  </div>
</template>

<script>
import VideoEmbed from '../VideoEmbed.vue';
import SectionWrap from '../../section/SectionWrap.vue';
import videoEmbedDocs from './videoEmbed.md';

export default {
  components: { VideoEmbed },
  decorator: SectionWrap,
  decoratorProps: { bgColor: 'inverted', centred: true },
  readme: {
    custom: videoEmbedDocs, decorated: true, source: true, html: true,
  },
};
</script>
