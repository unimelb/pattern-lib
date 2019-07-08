<template>
  <div>
    <filter-parent
      :data="data"
      :filter-on="filterOn" />
  </div>
</template>

<script>
import filterOn from '../cards/filterOn';
import data from '../cards/data';
import FilterParent from '../filters-core/generic-filter/FilterParent.vue';

export default {
  components: {
    FilterParent,
  },
  data() {
    return {
      filterOn,
      data,
    };
  },
};
</script>
