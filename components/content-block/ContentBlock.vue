<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
      validator: value => ['', 'sml', 'lge'].indexOf(value) !== -1,
    },
    short: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: '',
    },
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
