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
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
      };
    },
  },
};
</script>
