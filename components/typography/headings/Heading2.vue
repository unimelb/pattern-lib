<template>
  <h2 :class="`title title--${size}`">
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
