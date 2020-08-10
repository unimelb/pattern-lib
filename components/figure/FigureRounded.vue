<template>
  <div
    class="figure-rounded"
    :class="small ? `figure-rounded--sml` : ''"
    :style="`background-image: url(${backgroundImage});`"
    role="img"
    :aria-label="ariaLabel" />
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
