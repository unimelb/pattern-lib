<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        grid: true,
        'grid--center': this.center,
        [`grid--${this.cols}col`]: ['1', '2', '3', '4'].includes(this.cols),
      };
    },
  },
};
</script>
