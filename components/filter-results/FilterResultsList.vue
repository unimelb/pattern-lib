<template>
  <div class="filter-results__items">
    <div
      v-for="item in items"
      :key="item.id"
      class="filter-results__item">
      <FilterCard :item="item" />
    </div>
  </div>
</template>

<script>
import FilterCard from './FilterCard';
export default {
  components: {
    FilterCard,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
