<template>
  <div
    :class="classes">
    <iframe
      :src="returnVideoUrlApi"
      :aria-label="videoLabel"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen />
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
    videoLabel: {
      type: String,
      default: 'Video',
    },
    ratio: {
      type: String,
      default: '',
      validator: (value) => ['', '21_9'].includes(value),
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
    videoApi: {
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
        'embed--inset--lge': this.large,
        'embed--inset--med': this.medium,
        'embed--inset--sml': this.small,
      };
    },
    returnVideoUrlApi() {
      if (this.videoApi) {
        return `${this.src}?enablejsapi=1&rel=0&cc_load_policy=1&modestbranding=1&origin=https%3A%2F%2F${document.location.hostname}.unimelb.edu.au`;
      }
      return this.src;
    },
  },
};
</script>
