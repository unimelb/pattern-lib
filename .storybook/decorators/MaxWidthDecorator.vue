<template>
  <div :style="{ maxWidth: `${maxWidth}rem` }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: Number,
  },
};
</script>
