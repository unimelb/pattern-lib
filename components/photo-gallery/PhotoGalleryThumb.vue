<template>
  <ListItem class="photo-gallery__thumb" :cols="size">
    <img src="http://unsplash.it/600/800?random&gravity=center" alt="">
  </ListItem>
</template>

<script>
import FigureWrap from './../figure/FigureWrap.vue';
export default {
  components: { FigureWrap },
  size: {
    type: String,
  },
  thumb: {
    type: String,
  },
};
</script>
