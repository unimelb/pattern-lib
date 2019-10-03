<template>
  <div>
    <ListingWrap class="photo-gallery preview-img-list">
      <ListItem
        v-for="(item, index) in slots"
        :key="item.id"
        :cols="item.size">
        <FigureWrap
          :caption="captions && item.title"
          class="photo-gallery__figure">
          <div
            :class="{'preview-img-item': true, 'preview-img-item--nolink': noPopup }"
            :style="{'background-image': `url(${item.src})`, 'height': `${item.thumbHeight + 'px' || false}`}"
            @click="noPopup === false && open(index, slots, options)" />
        </FigureWrap>
      </ListItem>
    </ListingWrap>
    <PhotoSwipeMarkup />
  </div>
</template>

<script>
// photo-gallery-open
// photo-gallery-close

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeDefaultUI from 'photoswipe/dist/photoswipe-ui-default';
import ListingWrap from '../listing/ListingWrap.vue';
import FigureWrap from '../figure/FigureWrap.vue';
import ListItem from '../listing/ListItem.vue';
import PhotoSwipeMarkup from './PhotoSwipeMarkup.vue';

export default {
  components: {
    ListingWrap,
    ListItem,
    FigureWrap,
    PhotoSwipeMarkup,
  },
  props: {
    cols: {
      type: String,
      default: 'four',
    },
    images: {
      type: Array,
      default: () => [],
    },
    captions: {
      type: Boolean,
      default: false,
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
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
        thumbHeight: node.data.attrs['data-thumb-height'],
        title: node.data.attrs['data-title'],
        size: node.data.attrs['data-size'],
      }));
    },
  },
  methods: {
    open(
      index,
      items,
      options = {
        showHideOpacity: true,
        getThumbBoundsFn: false,
        shareEl: false,
        fullscreenEl: this.fullScreen,
        closeOnScroll: false,
        bgOpacity: 0.95,
      }
    ) {
      this.photoswipe = new PhotoSwipe(
        this.$el.querySelector('.pswp'),
        PhotoSwipeDefaultUI,
        items,
        options
      );
      this.photoswipe.init();
      this.$emit('photo-gallery-open');
    },
    close() {
      this.photoswipe.close();
      this.$emit('photo-gallery-close');
    },
  },
};
</script>
