<template>
  <li class="stats__item">
    <svg
      class="stats__icon"
      role="presentation" focusable="false"
      width="128" height="128"
      :viewbox="iconViewbox"
      v-html="icon"
    />
    <strong class="stats__value">
      <span class="stats__value__hash">#</span>
      <span class="stats__value__num">{{ number }}</span>
    </strong>
    <span class="stats__text">{{ meta }}</span>
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
    iconViewbox: {
      type: String,
      required: true,
    },
  },
};
</script>
