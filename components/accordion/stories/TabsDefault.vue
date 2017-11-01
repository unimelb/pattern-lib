<template>
  <SectionWrap bg-color="white">
    <AccordionGroup tabs>
      <AccordionPanel>
        <h2 slot="title">Use</h2>
        <p>We write using the conventions and principles of modern Australian English. Our style is simple and accessible, and often conversational in tone. We avoid archaic language, euphemisms and slang. Australian English is continuously evolving, so always refer to the latest edition of the Macquarie Dictionary (Macquarie Dictionary Publishers) and Style Manual: For Authors, Editors and Printers (John Wiley & Sons) for Australia’s most up-to-date spelling and grammar conventions.</p>
      </AccordionPanel>
      <AccordionPanel>
        <h2 slot="title">Inclusive language</h2>
        <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
      </AccordionPanel>
      <AccordionPanel>
        <h2 slot="title">Respect</h2>
        <p>We seek to use respectful and accurate terminology when writing about Aboriginal and Torres Strait Islanders. Indigenous is always capitalised and we never use Aborigine. The UN Declaration on the Rights of Indigenous peoples describes the right for Indigenous Peoples to determine their own distinctive identity. The term Australia’s First Nations people is increasingly being used and preferred by many.</p>
      </AccordionPanel>
    </AccordionGroup>
  </SectionWrap>
</template>

<script>
import AccordionGroup from '../AccordionGroup.vue';
import AccordionPanel from '../AccordionPanel.vue';

export default {
  components: { AccordionGroup, AccordionPanel },
};
</script>
