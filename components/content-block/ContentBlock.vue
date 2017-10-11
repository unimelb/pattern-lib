<template>
  <div
    class="content-block"
    :class="classes"
  >
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
        ...(this.size ? { [`content-block--${this.size}`]: true } : {}),
        ...(this.bg ? { [`bg-${this.bg}`]: true } : {}),
        'content-block--short': this.short,
      };
    },
  },
};
</script>
