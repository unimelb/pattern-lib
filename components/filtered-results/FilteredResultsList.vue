<template>
  <div class="filtered-results__items">
    <div
      v-for="item in items"
      :key="item.id"
      class="filtered-results__item">
      <FilteredCard :item="item" />
    </div>
  </div>
</template>

<script>
import FilteredCard from './FilteredCard';
export default {
  components: {
    FilteredCard,
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
