<template>
  <ListingWrap class="photo-gallery preview-img-list">
    <ListItem :cols="item.size" v-for="(item, index) in slots" :key="item.id">
      <FigureWrap class="photo-gallery__figure" :caption="captions && item.title">
        <div :class="`preview-img-item${ noPopup === false ? '' : ' preview-img-item--nolink'}`" :style="`background-image:url(${item.src})`" @click="noPopup === false && $photoswipe.open(index, slots, options)"></div>
      </FigureWrap>
    </ListItem>
  </ListingWrap>
</template>

<script>
import ListingWrap from './../listing/ListingWrap.vue';
import FigureWrap from './../figure/FigureWrap.vue';
export default {
  components: { ListingWrap, FigureWrap },
  props: {
    cols: {
      type: String,
      default: 'four',
    },
    images: {
      type: Array,
    },
    captions: Boolean,
    fullScreen: Boolean,
    noPopup: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    slots() {
      return this.$slots.default.map(node => ({
        src: node.data.attrs.src,
        msrc: node.data.attrs['data-thumb'],
        w: node.data.attrs.width,
        h: node.data.attrs.height,
        title: node.data.attrs['data-title'],
        size: node.data.attrs['data-size'],
      }));
    },
    options() {
      return {
        showHideOpacity: true,
        getThumbBoundsFn: false,
        shareEl: false,
        fullscreenEl: this.fullScreen,
        closeOnScroll: false,
        bgOpacity: 0.95,
      };
    },
  },
};
</script>
