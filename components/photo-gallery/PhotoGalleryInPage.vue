<template>
  <div class="photo-gallery-in-page">
    <ListingWrap
      :cols="cols"
      class="preview-img-list">
      <ListItem
        v-for="image in images"
        :key="image.id"
      >
        <FigureWrap
          :caption="captions && item.title"
          class="photo-gallery-in-page__figure"
          @click="noPopup === false && open(index, slots, options)"
        >
          <img
            :src="image.src"
            :alt="image.title"
          >
        </FigureWrap>
      </ListItem>
    </ListingWrap>
  </div>
</template>

<script>
import ListingWrap from '../listing/ListingWrap.vue';
import FigureWrap from '../figure/FigureWrap.vue';
import ListItem from '../listing/ListItem.vue';

export default {
  components: {
    ListingWrap,
    ListItem,
    FigureWrap,
  },
  props: {
    cols: {
      type: String,
      default: '3',
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
  // computed: {
  //   slots() {
  //     return this.$slots.default.map(node => ({
  //       src: node.data.attrs.src,
  //       w: node.data.attrs.width,
  //       h: node.data.attrs.height,
  //       title: node.data.attrs['data-title'],
  //       size: node.data.attrs['data-size'],
  //     }));
  //   },
  // },
  methods: {
    open(
      index,
      items
    ) {
      // console.log('open');
    },
    close() {
      // console.log('close');
    },
  },
};
</script>
