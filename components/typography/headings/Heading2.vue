<template>
  <div>
    <h2 :class="size">{{ text }}</h2>
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
