<template>
  <Carousel :stories="stories"/>
</template>

<script>
import Carousel from '../Carousel.vue';
import sample from '../sample.json';

export default {
  components: { Carousel },
  data() {
    return {
      stories: sample,
    };
  },
};
</script>
