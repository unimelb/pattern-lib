<template>
  <div
    class="grid grid--lg">
    <div
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="cell cell--lg cell--tab-1of2">
      <TestimonialsAlt
        :title="testimonial.title"
        :name="testimonial.name"
        :img-src="testimonial.imgSrc"
        :video="testimonial.video"
        :autoplay="videoPlayingIndex === index"
        @autoplay="videoPlayingIndex = index" />
    </div>
  </div>
</template>

<script>
import TestimonialsAlt from './TestimonialsAlt.vue';

export default {
  components: {
    TestimonialsAlt,
  },
  props: {
    testimonials: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      videoPlayingIndex: 0,
    };
  },
};
</script>
