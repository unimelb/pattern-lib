<template>
  <div
    :style="styleObject"
    class="full-width-image"/>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '100%',
    },
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        height: this.height,
      };
    },
  },
};
</script>
