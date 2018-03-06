<template>
  <SectionToggle class="section-toggle section-toggle--mobile">
    <SectionTogglePanel title="Arts" close="Close panel">
      <h4>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
    </SectionTogglePanel>
  </SectionToggle>
</template>

<script>
import SectionToggle from '../../section/toggle/SectionToggle.vue';
import SectionTogglePanel from '../../section/toggle/SectionTogglePanel.vue';

export default {
  components: { SectionToggle, SectionTogglePanel },
  readme: { html: true, source: false },
};
</script>
