<template>
  <TabsResponsive
    alt
    title="Selector prefix"
    label="options available">
    <Tab title="Use">
      <p>We write using the conventions and principles of modern Australian English.</p>
      <p> Our style is simple and accessible, and often conversational in tone. We avoid archaic language, euphemisms and slang. Australian English is continuously evolving, so always refer to the latest edition of the Macquarie Dictionary (Macquarie Dictionary Publishers) and Style Manual: For Authors, Editors and Printers (John Wiley & Sons) for Australia’s most up-to-date spelling and grammar conventions.</p>
      <ButtonIcon size="xsml">
        I am a child component
      </ButtonIcon>
    </Tab>
    <Tab title="Inclusive language">
      <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
    </Tab>
    <Tab title="Tab 3">
      <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
    </Tab>
    <Tab title="Tab 4">
      <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
    </Tab>
    <Tab title="Tab 5">
      <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
    </Tab>
  </TabsResponsive>
</template>

<script>
import Tab from '../Tab.vue';
import TabsResponsive from '../TabsResponsive.vue';
import tabsReadme from './tabsSelect.md';

export default {
  components: { Tab, TabsResponsive },
  readme: { custom: tabsReadme, source: false, html: true },
};
</script>
