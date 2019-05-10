<template>
  <Carousel :stories="stories"/>
</template>

<script>
import Carousel from '../Carousel.vue';
import sample from '../sample.json';
import CarouselDoc from './carousel-doc.md';

export default {
  components: { Carousel },
  data() {
    return {
      stories: sample,
    };
  },
  readme: { custom: CarouselDoc, source: true, html: true },
};
</script>
