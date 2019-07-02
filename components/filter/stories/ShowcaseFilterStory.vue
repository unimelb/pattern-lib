<template>
  <ShowcaseFilter :data="cardsData" />
</template>

<script>
import ShowcaseFilter from '../showcase/ShowcaseFilter.vue';
import cardsData from '../showcase/data.json';
import readmeShowcase from './readmeShowcase.md';

export default {
  components: { ShowcaseFilter },
  data() {
    return {
      cardsData,
    };
  },
  readme: { custom: readmeShowcase, html: false, source: false },
};
</script>
