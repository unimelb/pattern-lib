<template>
  <CardsFilter
    :data="cardsData.data"
    :filter-on="cardsData.filterOn" />
</template>

<script>
import CardsFilter from '../cards/CardsFilter.vue';
import cardsData from '../cards/data.json';
import cardsFilterReadme from '../cards/cardsFilterReadme.md';

export default {
  components: { CardsFilter },
  data() {
    return {
      cardsData,
    };
  },
  readme: { custom: cardsFilterReadme, html: false, source: false },
};
</script>
