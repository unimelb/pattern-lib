<template>
  <div class="bg-inverted">
    <MediaGallery
      :items="items"
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
      items: sample,
    };
  },
  readme: { custom: MediaGalleryDocs, source: false, html: false },
};
</script>
