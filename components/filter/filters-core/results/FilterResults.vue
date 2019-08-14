<template>
  <div v-if="show">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
