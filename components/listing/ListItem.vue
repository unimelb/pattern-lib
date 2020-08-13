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
    noPadding: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        cell: true,
        [`cell--no-padding-${this.noPadding}`]: [
          'all',
          'mobile',
          'tab',
          'desk',
        ].includes(this.noPadding),
        [`cell--desk-${this.cols}`]: [
          '1of1',
          '1of2',
          '1of3',
          '2of3',
          '1of4',
          '3of4',
          '1of6',
          '1of12',
        ].includes(this.cols),
      };
    },
  },
};
</script>
