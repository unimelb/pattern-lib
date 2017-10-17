<template>
  <figure
    class="figure"
    :class="{
      'figure--inset': inset,
      'figure--inset-left': left,
      'figure--inset-right': right,
      'figure--inset-lge' : large,
      'clearfix': left || right,
    }">
    <slot></slot>
    <progressive-img :src="img" :placeholder="placeholder" />
    <figcaption v-if="caption.length> 0">{{ caption }}</figcaption>
  </figure>
</template>


<script>
import VueProgressiveImage from 'vue-progressive-image';

export default {
  components: {
    VueProgressiveImage,
  },
  props: {
    img: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    caption: {
      type: String,
      default: 'test caption',
    },
    inset: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    right: {
      type: Boolean,
    },
  },
};

</script>
