<template>
  <div>
    <Tabs
      alt
      min>
      <Tab title="Use">
        <p>We write using the conventions and principles of modern Australian English.</p>
        <p>Our style is simple and accessible, and often conversational in tone. We avoid archaic language, euphemisms and slang. Australian English is continuously evolving, so always refer to the latest edition of the Macquarie Dictionary (Macquarie Dictionary Publishers) and Style Manual: For Authors, Editors and Printers (John Wiley & Sons) for Australia’s most up-to-date spelling and grammar conventions.</p>
        <ButtonIcon size="xsml">I am a child component</ButtonIcon>
      </Tab>
      <Tab title="Inclusive language">
        <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
      </Tab>
      <Tab title="Please">
        <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
      </Tab>
    </Tabs>
    <SectionWrap
      bg-color="white"
      short>
      <p>(text below the tabs)</p>
    </SectionWrap>
  </div>
</template>

<script>
import Tab from '../Tab.vue';
import Tabs from '../Tabs.vue';

export default {
  components: { Tab, Tabs },
  readme: { html: true, source: false },
};
</script>
