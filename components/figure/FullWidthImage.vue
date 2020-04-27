<template>
  <div
    :aria-label="ariaLabel"
    :style="styleObject"
    role="img"
    class="full-width-image" />
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: 'Full Width Image',
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
