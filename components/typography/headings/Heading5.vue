<template>
  <div>
    <h5 :class="size">{{ text }}</h5>
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
