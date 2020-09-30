
<template>
  <section-wrap bg-color="inverted-darker">
    <CardsFilterCategory :data="cardsData" />
  </section-wrap>
</template>

<script>
import CardsFilterCategory from '../cards-category/CardsFilterCategory.vue';
import cardsData from '../cards-category/data.json';
import cardsReadme from '../cards-category/cards.md';

export default {
  components: { CardsFilterCategory },
  data() {
    return {
      cardsData,
    };
  },
  readme: { custom: cardsReadme, html: false, source: false },
};
</script>
