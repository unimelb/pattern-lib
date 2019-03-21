<template>
  <SectionWrap style="background: #000;">
    <PhotoGalleryInPage
      :images="images"
      cols="3"
    />
  </SectionWrap>
</template>

<script>
import PhotoGalleryInPage from '../PhotoGalleryInPage.vue';
import sample from '../sample.json';

export default {
  components: { PhotoGalleryInPage },
  data() {
    return {
      images: sample,
    };
  },
  readme: { html: true, source: false },
};
</script>
