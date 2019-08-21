<template>
  <SectionWrap>
    <MediaGallery2
    />
  </SectionWrap>
</template>

<script>
import MediaGallery2 from '../MediaGallery2.vue';
import sample from '../sample.json';
import MediaGalleryDocs from './media-gallery.md';

export default {
  components: { MediaGallery2 },
  data() {
    return {
      media: sample,
    };
  },
  readme: { custom: MediaGalleryDocs, source: true, html: false },
};
</script>
