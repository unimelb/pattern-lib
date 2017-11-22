<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cols: String,
  },
  computed: {
    classes() {
      return {
        cell: true,
        [`cell--desk-${this.cols}`]: ['1of1', '1of2', '1of3', '2of3', '1of4'].includes(this.cols),
      };
    },
  },
};
</script>
