<template>
  <SectionWrap bg-color="white">
    <AccordionGroup open="true">
      <Accordion name="Arts">
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        <ButtonIcon size="xs">
          I am a child component
        </ButtonIcon>
      </Accordion>
      <Accordion name="Science">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <ButtonIcon size="xs">
          I am a child component
        </ButtonIcon>
      </Accordion>
      <Accordion name="Magic">
        <ButtonIcon
          size="xs"
          class="shim-mb1">
          I am a child component
        </ButtonIcon>
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </Accordion>
    </AccordionGroup>
  </SectionWrap>
</template>

<script>
import Accordion from '../Accordion.vue';
import AccordionGroup from '../AccordionGroup.vue';

export default {
  components: { Accordion, AccordionGroup },
  readme: { html: true, source: false },
};
</script>
