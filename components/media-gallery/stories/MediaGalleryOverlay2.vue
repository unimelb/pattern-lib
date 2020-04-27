<template>
  <div class="bg-inverted">
    <MediaGallery
      :items="items"
      columns="2"
      use-overlay />
  </div>
</template>

<script>
import MediaGallery from '../MediaGallery.vue';
import sample from '../sample.json';
import MediaGalleryDocs from './media-gallery-overlay.md';

export default {
  components: { MediaGallery },
  data() {
    return {
      items: sample,
    };
  },
  readme: { custom: MediaGalleryDocs, source: false, html: false },
};
</script>
