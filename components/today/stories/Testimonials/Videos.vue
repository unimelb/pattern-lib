<template>
  <div
    class="grid grid--scrollable grid--lg">
    <div
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="cell cell--lg cell--tab-1of2">
      <TestimonialsAlt
        v-bind="testimonial"
        autoplay />
    </div>
  </div>
</template>

<script>
import MaxWidthDecorator from 'storybook/decorators/MaxWidthDecorator.vue';
import TestimonialsAlt from 'components/testimonials/TestimonialsAlt.vue';

import testimonialsAltReadme from './testimonials-alt.md';

export default {
  components: { TestimonialsAlt },
  readme: { custom: testimonialsAltReadme, source: false, html: true },
  decorator: MaxWidthDecorator,
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
