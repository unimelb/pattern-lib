<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      validator: value => ['sml', 'lge'].indexOf(value) !== -1,
    },
    short: {
      type: Boolean,
      default: false,
    },
    bg: String,
  },
  computed: {
    classes() {
      return {
        'content-block': true,
        [`content-block--${this.size}`]: !!this.size,
        'content-block--short': this.short,
        [`bg-${this.bg}`]: !!this.bg,
      };
    },
  },
};
</script>
