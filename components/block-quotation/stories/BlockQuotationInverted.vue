<template>
  <BlockQuotation author="Steve Wozniak">Never trust a computer you can’t throw out a window.</BlockQuotation>
</template>

<script>
import BlockQuotation from '../BlockQuotation.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { BlockQuotation },
  readme: { source: true, html: true },
  decorator: ContentBlock,
  decoratorProps: { size: 'sm', bg: 'inverted' },
};
</script>
