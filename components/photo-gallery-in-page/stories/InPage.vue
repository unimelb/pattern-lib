
<template>
  <SectionWrap>
    <PhotoGalleryInPage :media="media"/>
  </SectionWrap>
</template>

<script>
import PhotoGalleryInPage from '../PhotoGalleryInPage.vue';
import sample from '../sample.json';
import PhotoGalaryInPageDocs from './photo-gallery-in-page.md';
export default {
  components: { PhotoGalleryInPage },
  data() {
    return {
      media: sample,
    };
  },
  readme: { custom: PhotoGalaryInPageDocs, source: true, html: true },
};
</script>
