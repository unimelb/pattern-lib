<template>
  <div :class="['stats-group', { 'stats-group--inverted': inverted }]">
    <ul class="stats-group__list list-reset">
      <slot />
    </ul>
    <p
      v-if="attribution"
      class="stats-group__attribution">
      {{ attribution }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
    attribution: {
      type: String,
      default: '',
    },
  },
};
</script>
