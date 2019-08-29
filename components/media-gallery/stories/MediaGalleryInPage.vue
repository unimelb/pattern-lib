<template>
  <div class="bg-inverted">
    <MediaGallery
      :media="media"
      in-page
    />
  </div>
</template>

<script>
import MediaGallery from '../MediaGallery.vue';
import sample from '../inpage-sample.json';
import MediaGalleryDocs from './media-gallery.md';

export default {
  components: { MediaGallery },
  data() {
    return {
      media: sample,
    };
  },
  readme: { custom: MediaGalleryDocs, source: true, html: false },
};
</script>
