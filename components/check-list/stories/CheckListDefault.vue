<template>
  <CheckList>
    <ol slot="list">
      <li>Check the <a href="a link">degree website</a>.</li>
      <li>Check the entry requirements to <em>clarify</em> your eligibility for application, duplicate instructions after to demonstrate a multiline item-cms: Check the entry requirements to clarify your eligibility for application.</li>
      <li>Ensure you meet the University's language requirements.</li>
      <li>Apply online or via the hardcopy application form.</li>
    </ol>
    <a
      slot="btn"
      href="/">Continue</a>
  </CheckList>
</template>

<script>
import CheckList from '../CheckList.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { CheckList },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
  readme: { html: true, source: false },
};
</script>
