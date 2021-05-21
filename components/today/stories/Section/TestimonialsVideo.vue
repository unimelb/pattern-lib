<template>
  <SectionAlt>
    <div slot="left">
      <h2 class="heading-md">
        Hear from students
      </h2>
    </div>
    <div class="grid grid--lg grid--scrollable">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="cell cell--lg cell--tab-1of2 shim-mb0 shim-mt0">
        <TestimonialsAlt
          v-bind="testimonial"
          autoplay />
      </div>
    </div>
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import TestimonialsAlt from 'components/testimonials/TestimonialsAlt.vue';
import SectionAltMd from './SectionAlt.md';

export default {
  components: { SectionAlt, TestimonialsAlt },
  readme: { custom: SectionAltMd, html: true, source: true },
  data() {
    return {
      testimonials: [{
        name: 'Nigel Huang',
        title: 'What is it like studying online compared to on campus?',
        video: {
          url: 'https://www.youtube.com/embed/MH5pJ4jokpI',
          duration: 28,
          preview: 'https://study.unimelb.edu.au/__data/assets/file/0022/265405/Byrd_Video.mp4',
        },
        imgSrc: 'https://study.unimelb.edu.au/__data/assets/image/0021/265404/Byrd_Advice.jpg',
      }, {
        name: 'Nigel Huang',
        title: 'What is it like studying online compared to on campus?',
        video: {
          url: 'https://www.youtube.com/embed/MH5pJ4jokpI',
          duration: 28,
          preview: 'https://study.unimelb.edu.au/__data/assets/file/0022/265405/Byrd_Video.mp4',
        },
        imgSrc: 'https://study.unimelb.edu.au/__data/assets/image/0021/265404/Byrd_Advice.jpg',
      }],
    };
  },
};
</script>
