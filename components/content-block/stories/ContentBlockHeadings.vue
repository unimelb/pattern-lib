<template>
  <ContentBlock>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>

    <HeadingContent />

    <Headings />

    <LeadContent />

  </ContentBlock>
</template>

<script>
import ContentBlock from '../ContentBlock.vue';
import HeadingContent from '../../typography/stories/HeadingClasses.vue';
import Headings from '../../typography/stories/Headings.vue';
import LeadContent from '../../typography/stories/Lead.vue';

export default {
  components: {
    ContentBlock,
    HeadingContent,
    Headings,
    LeadContent,
  },
  readme: { source: true, html: true },
};
</script>
