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
        listing: true,
        'listing--center': this.center,
        [`listing--${this.cols}`]: ['one', 'two', 'three', 'four'].includes(this.cols),
        grid: true,
      };
    },
  },
};
</script>
