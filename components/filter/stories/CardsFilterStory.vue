<template>
  <section-wrap bg-color="white">
    <CardsFilter :data="cardsData" />
  </section-wrap>
</template>

<script>
import CardsFilter from '../cards/CardsFilter.vue';
import cardsData from '../cards/data.json';
import cardsReadme from '../cards/cards.md';

export default {
  components: { CardsFilter },
  data() {
    return {
      cardsData,
    };
  },
  readme: { custom: cardsReadme, html: false, source: false },
};
</script>
