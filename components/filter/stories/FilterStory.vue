<template>
  <div>
    <filter-parent :data="filterData" />
  </div>
</template>

<script>
import filterData from '../filters-core/generic-filter/filterData';
import FilterParent from '../filters-core/generic-filter/FilterParent.vue';

export default {
  components: {
    FilterParent,
  },
  data() {
    return {
      filterData,
    };
  },
};
</script>
