<template>
  <SectionAlt>
    <div slot="left">
      <h2 class="heading-md">
        Hear from students
      </h2>
    </div>
    <TestimonialsAlt
      title="Taking this course gave me so many relevant new skills. Now, I am able to lead larger teams with more confidence. It’s opened up pathways in my career that I wouldn’t have access to otherwise."
      name="Simi Chopra, Business Analyst"
      img-src="https://randomuser.me/api/portraits/lego/1.jpg"
      long />
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import TestimonialsAlt from 'components/testimonials/TestimonialsAlt.vue';
import SectionAltMd from './SectionAlt.md';

export default {
  components: { SectionAlt, TestimonialsAlt },
  readme: {
    custom: SectionAltMd,
    html: true,
    source: true,
    replace: {
      '<div class="testimonials-alt__img progressive-image" style="max-width: 100%;"><span><canvas width="1" height="1" class="progressive-image-canvas"></canvas> <div class="progressive-image-wrapper" style="padding-bottom: 100%;"><img alt="Simi Chopra, Business Analyst" class="progressive-image-main" style="display: none;"> </div></span></div>': '<progressive-image class="testimonials-alt__img" aspect-ratio="1" src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Simi Chopra"></progressive-image>',
    },
  },
};
</script>
