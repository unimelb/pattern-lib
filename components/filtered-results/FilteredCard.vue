<template>
  <a
    href="/"
    :class="['filtered-results__card', getCategoryClassName()]">
    <span class="filtered-results__card-label">{{ item.category }}</span>
    <span class="filtered-results__card-category">Category name</span>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getCategoryClassName() {
      return this.item.category === 'major' ? 'filtered-results__card--major' : 'filtered-results__card--minor';
    },
  },
};
</script>
