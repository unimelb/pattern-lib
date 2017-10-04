<template>
  <div class="fr-accordion js-fr-accordion">
    <h2 id="accordion-header-1" class="fr-accordion__header js-fr-accordion__header">Science</h2>
    <div id="accordion-panel-1" class="fr-accordion__panel js-fr-accordion__panel">
      <div class="content-block">
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </div>
    </div>
    <h2 id="accordion-header-2" class="fr-accordion__header js-fr-accordion__header">Arts</h2>
    <div id="accordion-panel-2" class="fr-accordion__panel js-fr-accordion__panel">
      <div class="content-block">
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </div>
    </div>
    <h2 id="accordion-header-3" class="fr-accordion__header js-fr-accordion__header">Other</h2>
    <div id="accordion-panel-3" class="fr-accordion__panel js-fr-accordion__panel">
      <div class="content-block">
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Fraccordion from '../accordion.js';

  export default {
    name: 'Accordion',
    mounted: Fraccordion,
    props: {
      singleSelect: Boolean
    }
  }
</script>
