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
    small: {
      type: Boolean,
      default: false,
    },
    bg: String,
  },
  computed: {
    classes() {
      return {
        'content-block--sml': this.small,
        ...(this.bg ? { [`bg-${this.bg}`]: true } : {}),
      };
    },
  },
};
</script>
