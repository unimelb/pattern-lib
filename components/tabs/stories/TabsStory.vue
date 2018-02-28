<template>
  <Tabs>
    <Tab title="tab1">
      <p>We write using the conventions and principles of modern Australian English.</p>
      <p> Our style is simple and accessible, and often conversational in tone. We avoid archaic language, euphemisms and slang. Australian English is continuously evolving, so always refer to the latest edition of the Macquarie Dictionary (Macquarie Dictionary Publishers) and Style Manual: For Authors, Editors and Printers (John Wiley & Sons) for Australia’s most up-to-date spelling and grammar conventions.</p>
      <ButtonIcon size="xsml">I am a child component</ButtonIcon>
    </Tab>
    <Tab title="tab2">test2</Tab>
    <Tab title="tab3">test3</Tab>
  </Tabs>
</template>

<script>
import Tabs from './../Tabs.vue';
import Tab from './../Tab.vue';
export default {
  components: {
    Tabs, Tab,
  },
};
</script>
