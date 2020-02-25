<template>
  <a
    :href="item.href"
    :class="['filtered-results__card', getCategoryClassName()]">
    <span class="filtered-results__card-label">{{ item.type }}</span>
    <span class="filtered-results__card-category">{{ item.name }}</span>
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
      // todo: implement color scheme for different categories
      return this.item.type === 'major' ? 'filtered-results__card--major' : 'filtered-results__card--minor';
    },
  },
};
</script>
