<template>
  <div
    class="spinner">
    <div class="spinner__cube" />

    <div
      v-if="spinnerText"
      class="spinner__text">
      {{ spinnerText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    spinnerText: {
      type: String,
      default: '',
    },
  },
};
</script>
