<template>
  <li class="stats-group__item">
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="stats-group__icon"
      v-html="icon" />
    <!-- eslint-enable vue/no-v-html -->
    <strong class="stats-group__value">
      <span class="stats-group__value__hash">#</span>
      <span class="stats-group__value__num">{{ number }}</span>
    </strong>
    <span class="stats-group__text">{{ meta }}</span>
  </li>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      required: true,
    },
    meta: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
