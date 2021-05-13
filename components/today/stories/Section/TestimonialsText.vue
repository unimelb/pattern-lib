<template>
  <SectionAlt>
    <div slot="left">
      <h2 class="heading-md">
        Hear from students
      </h2>
    </div>
    <div class="grid grid--lg">
      <div class="cell cell--lg cell--tab-1of2 shim-mt0 shim-mb1">
        <TestimonialsAlt
          title="Taking this course gave me so many relevant new skills"
          name="Simi Chopra"
          img-src="https://randomuser.me/api/portraits/lego/1.jpg" />
      </div>
      <div class="cell cell--lg cell--tab-1of2 shim-mt0 shim-mb1">
        <TestimonialsAlt
          title="Taking this course gave me so many relevant new skills"
          name="Simi Chopra"
          img-src="https://randomuser.me/api/portraits/lego/1.jpg" />
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
};
</script>
