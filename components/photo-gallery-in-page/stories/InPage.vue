<template>
  <SectionWrap style="background: #000;">
    <PhotoGalleryInPage :images="images"/>
  </SectionWrap>
</template>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto asperiores, corporis eligendi eos ex, explicabo facere fugit itaque iusto laudantium magni minima nostrum perferendis praesentium, quas quisquam quos recusandae voluptatem? Asperiores beatae commodi corporis magnam unde. Commodi dolor dolorem enim illo modi nesciunt nulla reprehenderit sint, vel veniam.
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
