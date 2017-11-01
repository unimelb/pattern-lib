<template>
  <ListingWrap class="photo-gallery preview-img-list">
    <ListItem :cols="item.size" v-for="(item, index) in slots" :key="item.id">
      <figure class="photo-gallery__thumb">
        <img class="preview-img-item" :src="item.src" @click="$photoswipe.open(index, slots)">
        <figcaption>Lorem ipsum Duis exercitation dolore pariatur dolore.</figcaption>
      </figure>
    </ListItem>
  </ListingWrap>
</template>

<script>
import ListingWrap from './../listing/ListingWrap.vue';
export default {
  components: { ListingWrap },
  props: {
    cols: {
      type: String,
      default: 'four',
    },
    images: {
      type: Array,
    },
  },
  computed: {
    slots() {
      console.log('Slots', this.$slots);
      return this.$slots.default.map(node => ({
        src: node.data.attrs.src,
        msrc: node.data.attrs['data-thumb'],
        w: node.data.attrs.width,
        h: node.data.attrs.height,
        title: node.data.attrs['data-title'],
        size: node.data.attrs['data-size'],
      }));
    },
  },
};
</script>
