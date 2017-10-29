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
        alert: true,
        [`alert--${this.level}`]: !!this.level,
      };
    },
  },
};
</script>
