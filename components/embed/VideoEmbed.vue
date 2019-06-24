<template>
  <div :class="classes">
    <iframe
      :src="src"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen/>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
      required: true,
    },
    ratio: {
      type: String,
      default: '',
      validator: value => ['', '21_9'].indexOf(value) !== -1,
    },
    inset: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        embed: true,
        [`embed--${this.ratio}`]: !!this.ratio,
        'embed--inset': this.inset,
        'embed--inset-left': this.left,
        'embed--inset-right': this.right,
        'embed--inset--lg': this.large,
        'embed--inset--md': this.medium,
        'embed--inset--sm': this.small,
      };
    },
  },
};
</script>
