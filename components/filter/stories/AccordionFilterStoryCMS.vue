<template>
  <section-wrap bg-color="white">
    <AccordionFilter
      :data="accordionData"
      show-ssr
    >
      <p>Server-side Code is rended on page load.  Click on Search to filter on data object.</p>
    </AccordionFilter>
  </section-wrap>
</template>

<script>
import AccordionFilter from '../accordion/AccordionFilter.vue';
import accordionReadme from '../accordion/accordionCMS.md';
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
