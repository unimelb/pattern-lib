<template>
  <div>
    <h6 :class="size">{{ text }}</h6>
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
