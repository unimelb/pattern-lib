<template>
  <section-wrap bg-color="white">
    <CardsFilter
      :data="cardsData"
      show-ssr>
      <p>Server-side Code is rended on page load.  Click on Search to filter on data object.</p>
    </CardsFilter>
  </section-wrap>
</template>

<script>
import CardsFilter from '../cards/CardsFilter.vue';
import cardsData from '../cards/data.json';
import cardsReadme from '../cards/cardsCMS.md';

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
