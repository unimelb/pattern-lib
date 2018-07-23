<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        cell: true,
        [`cell--desk-${this.cols}`]: ['1of1', '1of2', '1of3', '2of3', '1of4', '3of4'].includes(this.cols),
      };
    },
  },
};
</script>
