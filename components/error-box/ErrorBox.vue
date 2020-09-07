<template>
  <div
    v-if="messages.length"
    class="error-box">
    <div
      v-for="(message, messageIndex) in messages"
      :key="messageIndex">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorBox',
  props: {
    messages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
