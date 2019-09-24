<template>
  <h6 :class="`title title--${size}`">
    {{ text }}
  </h6>
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
