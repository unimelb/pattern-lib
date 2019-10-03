<template>
  <BlockQuotation author="Steve Wozniak">
    Lorem ipsum dolor sit amet consectetur.
  </BlockQuotation>
</template>

<script>
import BlockQuotation from '../BlockQuotation.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { BlockQuotation },
  readme: { source: true, html: true },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
};
</script>
