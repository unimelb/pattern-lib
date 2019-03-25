<template>
  <SectionWrap>
    <PhotoGalleryPopOver
      :images="images"
      display-caption
    />
  </SectionWrap>
</template>

<script>
import PhotoGalleryPopOver from '../PhotoGalleryPopOver.vue';
import sample from '../sample.json';
import PhotoGalaryPopOverDocs from './photo-gallery-pop-over.md';

export default {
  components: { PhotoGalleryPopOver },
  data() {
    return {
      images: sample,
    };
  },
  readme: { custom: PhotoGalaryPopOverDocs, source: true, html: true },
};
</script>
