<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    classes() {
      return {
        notice: true,
        [`notice--${this.level}`]: !!this.level,
      };
    },
  },
};
</script>
