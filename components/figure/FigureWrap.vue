<template>
  <figure :class="classes">
    <slot></slot>
    <figcaption v-if="caption">{{ caption }}</figcaption>
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
    left: Boolean,
    right: Boolean,
    large: Boolean,
    small: Boolean,
  },
  computed: {
    classes() {
      return {
        figure: true,
        'figure--inset': this.inset,
        'figure--inset-left': this.left,
        'figure--inset-right': this.right,
        'figure--inset-lge': this.large,
        'figure--inset-sml': this.small,
      };
    },
  },
};
</script>
