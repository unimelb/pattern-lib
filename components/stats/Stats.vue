<template>
  <div :class="['stats', { 'stats--inverted': inverted }]">
    <ul class="stats__list list-reset">
      <slot></slot>
    </ul>
    <p v-if="attribution" class="stats__attribution">{{ attribution }}</p>
  </div>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
    attribution: String,
  },
};
</script>

