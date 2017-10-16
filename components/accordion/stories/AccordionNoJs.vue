<template>
  <accordion-group :disabled="true">
    <accordion-panel>
      <h2 slot="title">Arts</h2>
      <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
    </accordion-panel>
    <accordion-panel>
      <h2 slot="title">Science</h2>
      <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
    </accordion-panel>
  </accordion-group>
</template>

<script>
import AccordionGroup from '../AccordionGroup.vue';
import AccordionPanel from '../AccordionPanel.vue';

export default {
  components: { AccordionGroup, AccordionPanel },
};
</script>
