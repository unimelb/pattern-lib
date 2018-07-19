<template>
  <SectionWrap>
    <PhotoGallery captions>
      <img
        v-for="image in images"
        :src="image.src"
        :alt="image.title"
        :width="image.w"
        :key="image.id"
        :height="image.h"
        :data-title="image.title"
        :data-thumb="image.msrc"
        :data-size="image.size"
        :data-thumb-height="image.thumbHeight">
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
          size: '1of1',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // path to image
          w: 800, // image width
          h: 600, // image height
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // small image placeholder,
          title: 'Thumb height 600px',
          thumbHeight: 600,
        },
        {
          id: 2,
          size: '1of1',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // path to image
          w: 800, // image width
          h: 600, // image height
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // small image placeholder,
          title: 'Thumb height 400px',
          thumbHeight: 400,
        },
        {
          id: 3,
          size: '1of1',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // path to image
          w: 800, // image width
          h: 600, // image height
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // small image placeholder,
          title: 'Thumb height 300px',
          thumbHeight: 300,
        },
        {
          id: 4,
          size: '1of1',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // path to image
          w: 1024, // image width
          h: 768, // image height
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // small image placeholder,
          title: 'Image sdfsdfsdf',
          thumbHeight: 600,
        },
        {
          id: 5,
          size: '1of1',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // path to image
          w: 1024, // image width
          h: 768, // image height
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // small image placeholder,
          title: 'Image sdfsdfsdf',
          thumbHeight: 500,
        },
        {
          id: 6,
          size: '1of1',
          src:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // path to image
          w: 1024, // image width
          h: 768, // image height
          msrc:
            'https://images.unsplash.com/photo-1489861464420-98e73bf2d186?auto=format&fit=crop&w=300&q=30&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', // small image placeholder,
          title: 'Image sdfsdfsdf',
          thumbHeight: 600,
        },
      ],
    };
  },
  readme: { html: true, source: false },
};
</script>
