<template>
  <SectionWrap>
    <ThumbnailGallery
      :items="items"
      display-caption
      columns="4"
    />
  </SectionWrap>
</template>

<script>
import ThumbnailGallery from '../ThumbnailGallery.vue';
import thumbnails from '../thumbnails-sample.json';
import ThumbnailsDocs from './thumbnails.md';

export default {
  components: { ThumbnailGallery },
  data() {
    return {
      items: thumbnails,
    };
  },
  readme: { custom: ThumbnailsDocs, source: false, html: false },
};
</script>
