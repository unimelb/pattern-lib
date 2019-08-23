<template>
  <SectionWrap>
    <ThumbnailGallery
      :media="media"
      display-caption
      columns="4"
    />
  </SectionWrap>
</template>

<script>
import ThumbnailGallery from '../ThumbnailGallery.vue';
import thumbnails from '../thumbnails-sample.json';
import MediaGalleryDocs from './media-gallery.md';

export default {
  components: { ThumbnailGallery },
  data() {
    return {
      media: thumbnails,
    };
  },
  readme: { custom: MediaGalleryDocs, source: true, html: false },
};
</script>
