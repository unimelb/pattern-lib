<template>
  <section-wrap bg-color="white">
    <AccordionFilter :data="accordionData" />
  </section-wrap>
</template>

<script>
import AccordionFilter from '../accordion/AccordionFilter.vue';
import accordionReadme from '../accordion/accordion.md';
import accordionData from '../accordion/data.json';

export default {
  components: { AccordionFilter },
  readme: { custom: accordionReadme, source: false, html: false },
  data() {
    return {
      accordionData,
    };
  },
};
</script>
