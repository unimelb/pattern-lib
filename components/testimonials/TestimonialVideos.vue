<template>
  <div
    class="grid grid--lg">
    <div
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="cell cell--lg cell--tab-1of2">
      <TestimonialToday
        :title="testimonial.title"
        :name="testimonial.name"
        :img-src="testimonial.image_url"
        :video="testimonial.video"
        :autoplay="videoPlayingIndex === index"
        @autoplay="videoPlayingIndex = index" />
    </div>
  </div>
</template>

<script>
import TestimonialToday from './TestimonialToday.vue';

export default {
  components: {
    TestimonialToday,
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
