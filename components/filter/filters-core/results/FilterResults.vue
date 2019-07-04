<template>
  <div>
    <div v-if="input.length">
      <h1>filter results of input: {{ input }}</h1>
      <h1
        v-for="(item, index) in input"
        :key="index">{{ item.value }}</h1>
    </div>
    <div v-if="checkbox.length">
      <h1>filter results of checkbox: {{ checkbox }}</h1>
      <li
        v-for="(item, index) in checkbox"
        :key="index">{{ item }}</li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: [Array, Object],
      default: () => [],
    },
    checkbox: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>
