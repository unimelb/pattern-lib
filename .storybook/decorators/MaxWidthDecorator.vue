<template>
  <div :style="{ maxWidth: `${maxWidth}rem` }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: Number,
      default: 40,
    },
  },
};
</script>
