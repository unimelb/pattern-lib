<template>
  <SectionWrap>
    <Thumbnails
      :media="media"
      display-caption/>
  </SectionWrap>
</template>

<script>
import Thumbnails from '../Thumbnails.vue';
import sample from '../sample.json';
import MediaGalleryDocs from './media-gallery.md';

export default {
  components: { Thumbnails },
  data() {
    return {
      media: sample,
    };
  },
  readme: { custom: MediaGalleryDocs, source: true, html: true },
};
</script>
