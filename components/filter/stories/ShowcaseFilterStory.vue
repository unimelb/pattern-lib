<template>
  <ShowcaseFilter :data="cardsData"/>
</template>

<script>
import ShowcaseFilter from '../showcase/ShowcaseFilter.vue';
import cardsData from '../showcase/data.json';
export default {
  components: { ShowcaseFilter },
  data() {
    return {
      cardsData,
    };
  },
  readme: { html: true, source: false },
};
</script>
