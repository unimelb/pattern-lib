<template>
  <div class="bg-alt">
    <MediaGallery
      :media="media"
      display-caption
      columns="2"
      overlay
    />
  </div>
</template>

<script>
import MediaGallery from '../MediaGallery.vue';
import thumbnails from '../thumbnails-sample.json';
import MediaGalleryDocs from './media-gallery.md';

export default {
  components: { MediaGallery },
  data() {
    return {
      media: thumbnails,
    };
  },
  readme: { custom: MediaGalleryDocs, source: true, html: false },
};
</script>
