
<template>
  <section-wrap bg-color="white">
    <CardsFilter :data="cardsData" />
  </section-wrap>
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
