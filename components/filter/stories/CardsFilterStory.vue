
<template>
  <section-wrap bg-color="white">
    <CardsFilter
      :data="cardsData"
      show-ssr>
      <div class="grid grid--3col">
        <ListItem>
          <div class="a">test</div>
        </ListItem>
        <ListItem>
          <div class="a">test</div>
        </ListItem>
        <ListItem>
          <div class="a">test</div>
        </ListItem>
        <ListItem>
          <div class="a">test</div>
        </ListItem>
      </div>
    </CardsFilter>
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
