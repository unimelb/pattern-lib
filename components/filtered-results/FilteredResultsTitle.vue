<template>
  <div>
    <h4
      class="filtered-results__title">
      <span
        v-html="getMessage()" />
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
    items: {
      type: Number,
      default: () => 0,
      required: true,
    },
    filters: {
      type: Number,
      default: () => 0,
      required: true,
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
    getLabel() {
      return this.filters === 0 || this.filters > 1 ? 's' : '';
    },
    getMessage() {
      return `${this.items} results found with <strong>${this.filters} filter${this.getLabel()}</strong> applied.`;
    },
  },
};
</script>
