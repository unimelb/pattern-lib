<template>
  <SectionWrap>
    <MediaGallery
      :media="media"
      display-caption
      pop-over
    />
  </SectionWrap>
</template>

<script>
import MediaGallery from '../MediaGallery.vue';
import sample from '../sample.json';
import PhotoGalaryPopOverDocs from './photo-gallery-pop-over.md';

export default {
  components: { MediaGallery },
  data() {
    return {
      media: sample,
    };
  },
  readme: { custom: PhotoGalaryPopOverDocs, source: true, html: true },
};
</script>
