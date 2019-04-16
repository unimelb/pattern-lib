<template>
  <SectionWrap>
    <MediaGallery
      :media="media"
      pop-over
    />
  </SectionWrap>
</template>

<script>
import MediaGallery from '../MediaGallery.vue';
import sample from '../sample.json';
import MediaGalleryDocs from './media-gallery.md';

export default {
  components: { MediaGallery },
  data() {
    return {
      media: sample,
    };
  },
  readme: { custom: MediaGalleryDocs, source: true, html: true },
};
</script>
