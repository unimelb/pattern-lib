<template>
  <ul class="list-reset">
    <li class="stats-group__item">
      <div
        class="stats-group__icon"
        v-html="icon" />
      <strong class="stats-group__value">
        <span class="stats-group__value__hash">#</span>
        <span class="stats-group__value__num">{{ number }}</span>
      </strong>
      <span class="stats-group__text">{{ meta }}</span>
    </li>
  </ul>
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
