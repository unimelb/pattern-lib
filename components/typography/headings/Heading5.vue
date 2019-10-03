<template>
  <h5 :class="`title title--${size}`">
    {{ text }}
  </h5>
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
