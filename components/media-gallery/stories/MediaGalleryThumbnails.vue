<template>
  <SectionWrap>
    <ThumbnailGallery
      :media="media"
      display-caption
      columns="2"
    />
  </SectionWrap>
</template>

<script>
import ThumbnailGallery from '../ThumbnailGallery.vue';
import sample from '../sample.json';
import MediaGalleryDocs from './media-gallery.md';

export default {
  components: { ThumbnailGallery },
  data() {
    return {
      media: sample,
    };
  },
  readme: { custom: MediaGalleryDocs, source: true, html: false },
};
</script>
