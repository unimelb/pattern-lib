<template>
  <div>
    <h4
      v-if="message"
      class="filtered-results__title">
      <span
        v-html="message" />
      <span
        v-if="secondaryMessage"
        class="filtered-results__title-notice text-italic text-bold"
        @click="onCallback"
        v-html="secondaryMessage" />
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: () => '',
      required: false,
    },
    secondaryMessage: {
      type: String,
      default: () => '',
      required: false,
    },
    callback: {
      type: Function,
      default: () => false,
      required: false,
    },
  },
  methods: {
    onCallback() {
      if (typeof this.callback === 'function') {
        this.callback();
      }
    },
  },
};
</script>
