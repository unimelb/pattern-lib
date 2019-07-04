<template>
  <Carousel
    :stories="stories"
  />
</template>

<script>
import Carousel from '../Carousel.vue';
import CarouselDoc from './carousel-doc.md';

export default {
  components: { Carousel },
  data() {
    return {
      stories: [{
        src: 'http://6.hikb.at/wycieczki/sabaudia/pb-1218040.jpg',
        altText: 'test',
        title: 'Story 3',
        description: 'Story 3 description',
        buttonText: 'Read',
        buttonHref: 'google.com',
      },
      {
        src: 'http://6.hikb.at/wycieczki/sabaudia/pb-1218040.jpg',
        altText: 'test',
        title: 'Story 3',
        description: 'Story 3 description',
        buttonText: 'Read',
        buttonHref: 'google.com',
      }],
    };
  },
  readme: { custom: CarouselDoc, source: true, html: true },
};
</script>
