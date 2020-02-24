<template>
  <h4 class="filtered-results__title">
    {{ items.length }} results found with <strong>{{ filters.length }} filters</strong> applied.
    <span class="filtered-results__title-notice text-italic text-bold">
      Apply default filters for Domestic undergraduate?
    </span>
  </h4>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    filters: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
