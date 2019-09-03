<template>
  <div class="bg-alt">
    <MediaGallery
      :items="items"
      display-caption
      columns="3"
      show-thumbnails
    />
  </div>
</template>

<script>
import MediaGallery from '../MediaGallery.vue';
import thumbnails from '../thumbnails-sample.json';
import ThumbnailsDocs from './thumbnails.md';

export default {
  components: { MediaGallery },
  data() {
    return {
      items: thumbnails,
    };
  },
  readme: { custom: ThumbnailsDocs, source: false, html: false },
};
</script>
