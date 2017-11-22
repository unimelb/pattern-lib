<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cols: String,
    center: Boolean,
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
