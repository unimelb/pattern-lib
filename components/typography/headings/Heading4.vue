<template>
  <h4 :class="`title title--${size}`">
    {{ text }}
  </h4>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
      validator: value => ['', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].indexOf(value) !== -1,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
