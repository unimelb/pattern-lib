<template>
  <div
    class="figure-rounded"
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
  },
};
</script>
