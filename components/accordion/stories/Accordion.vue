<template>
  <SectionWrap bg-color="white">
    <Accordion name="Arts">
      <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
      <p>
        Lorem ipsum dolor sit amet,
        <a href>consectetur</a> adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.
      </p>
      <p>
        <a
          href="https://study.unimelb.edu.au/how-to-apply/advanced-standing"
          class="btn btn--icon btn--icon--chevron-right"
        >How to apply for Advanced Standing</a>
      </p>
      <ButtonIcon size="xs">I am a child component</ButtonIcon>
    </Accordion>

    <Accordion name="Do not">
      <Accordion name="Arts">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </Accordion>
      <Accordion name="Science">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </Accordion>
      <Accordion name="Magic">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </Accordion>
    </Accordion>

    <p class="shim-pt1">
      Two independent accordions:
    </p>

    <Accordion name="Science">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
      <ButtonIcon size="xs">I am a child component</ButtonIcon>
    </Accordion>
    <Accordion name="Magic">
      <ButtonIcon
        size="xs"
        class="shim-mb1">I am a child component</ButtonIcon>
      <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
    </Accordion>
  </SectionWrap>
</template>

<script>
import Accordion from '../Accordion.vue';

export default {
  components: { Accordion },
  readme: { html: true, source: false },
};
</script>
