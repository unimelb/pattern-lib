<template>
  <CardsFilter
    :data="cardsData"
    :filter-on="filterOn" />
</template>

<script>
import CardsFilter from '../cards/CardsFilter.vue';
import cardsData from '../cards/data.json';
import filterOn from '../cards/filterOn.json';
import cardsFilterReadme from '../cards/cardsFilterReadme.md';

export default {
  components: { CardsFilter },
  data() {
    return {
      cardsData,
      filterOn,
    };
  },
  readme: { custom: cardsFilterReadme, html: false, source: false },
};
</script>
