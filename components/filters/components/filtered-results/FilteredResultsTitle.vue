<template>
  <div>
    <h4
      v-if="items > -1"
      class="filtered-results__title">
      <span>
        {{ items }} results found with <strong>{{ filters }} {{ filterPrefix }}</strong> applied.
      </span>
      <span
        v-if="secondaryMessage"
        class="filtered-results__title-notice text-italic text-bold"
        @click="onCallback">{{ secondaryMessage }}</span>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Number,
      default: 0,
      required: true,
    },
    filters: {
      type: Number,
      default: 0,
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
  computed: {
    filterPrefix() {
      const { filters } = this;

      return filters === 1 ? 'filter' : 'filters';
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
