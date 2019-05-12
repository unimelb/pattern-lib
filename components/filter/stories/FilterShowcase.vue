<template>
  <FilterShowcaseCards :data="filterData"/>
</template>

<script>
import FilterShowcaseCards from '../FilterShowcaseCards.vue';
import cardsData from '../data.json';
import filterData from '../filter.json';

export default {
  components: { FilterShowcaseCards },
  data() {
    return {
      cardsData,
      filterData,
    };
  },
  readme: { html: true, source: false },
};
</script>
