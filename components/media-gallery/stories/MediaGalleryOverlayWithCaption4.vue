<template>
  <div class="bg-inverted">
    <MediaGallery
      :items="items"
      display-caption
      columns="4"
      use-overlay
    />
  </div>
</template>

<script>
import MediaGallery from '../MediaGallery.vue';
import thumbnails from '../thumbnails-sample.json';
import MediaGalleryDocs from './media-gallery-overlay.md';

export default {
  components: { MediaGallery },
  data() {
    return {
      items: thumbnails,
    };
  },
  readme: { custom: MediaGalleryDocs, source: false, html: false },
};
</script>
