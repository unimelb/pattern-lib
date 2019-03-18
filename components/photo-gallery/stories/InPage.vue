<template>
  <SectionWrap style="background: #000;">
    <PhotoGalleryInPage :images="images"/>
  </SectionWrap>
</template>

<script>
import PhotoGalleryInPage from "../PhotoGalleryInPage.vue";
import sample from "../sample.json";
import PhotoGalaryInPageDocs from "./photo-gallery-in-page.md";

export default {
  components: { PhotoGalleryInPage },
  data() {
    return {
      images: sample
    };
  },
  readme: { custom: PhotoGalaryInPageDocs, source: true, html: true }
};
</script>
