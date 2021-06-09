<template>
  <figure :class="classes">
    <slot />
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    caption: {
      type: [Boolean, String],
      default: 'test caption',
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
    fill: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        figure: true,
        'figure--inset': this.inset,
        'figure--inset-left': this.left,
        'figure--inset-right': this.right,
        'figure--lge': this.large,
        'figure--med': this.medium,
        'figure--sml': this.small,
        'figure--fill': this.fill,
      };
    },
  },
};
</script>
