<template>
  <FilterShowcaseCards :data="cardsData"/>
</template>

<script>
import FilterShowcaseCards from '../FilterShowcaseCards.vue';
import cardsData from '../data.json';

export default {
  components: { FilterShowcaseCards },
  data() {
    return {
      cardsData,
    };
  },
  readme: { html: true, source: false },
};
</script>
