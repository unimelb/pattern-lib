<template>
  <div>
    <filter-parent :data="filterData" />
  </div>
</template>

<script>
import filterData from '../filterData';
import FilterParent from '../filterParent/FilterParent.vue';

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
