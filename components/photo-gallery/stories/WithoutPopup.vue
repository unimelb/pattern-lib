<template>
  <SectionWrap>
    <PhotoGallery
      captions
      no-popup>
      <img
        v-for="image in images"
        :key="image.id"
        :src="image.src"
        :alt="image.title"
        :width="image.w"
        :height="image.h"
        :data-title="image.title"
        :data-thumb="image.msrc"
        :data-size="image.size">
    </PhotoGallery>
  </SectionWrap>
</template>

<script>
import PhotoGallery from '../PhotoGallery.vue';

export default {
  components: { PhotoGallery },
  data() {
    return {
      images: [
        {
          id: 1,
          size: '2of3',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          w: 800,
          h: 600,
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          title: 'Image sdfsdf',
        },
        {
          id: 2,
          size: '1of3',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          w: 800,
          h: 600,
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          title: 'Image sdfsdf',
        },
        {
          id: 3,
          size: '1of4',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          w: 800,
          h: 600,
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          title: 'Imagesdf Caption',
        },
        {
          id: 4,
          size: '1of2',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          w: 1024,
          h: 768,
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          title: 'Image sdfsdfsdf',
        },
        {
          id: 5,
          size: '1of4',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          w: 1024,
          h: 768,
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          title: 'Image sdfsdfsdf',
        },
        {
          id: 6,
          size: '1of4',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          w: 1024,
          h: 768,
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
          title: 'Image sdfsdfsdf',
        },
      ],
    };
  },
  readme: { html: true, source: false },
};
</script>
