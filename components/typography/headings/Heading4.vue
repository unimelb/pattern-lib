<template>
  <div>
    <h4 :class="size">{{ text }}</h4>
  </div>
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
