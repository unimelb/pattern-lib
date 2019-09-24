<template>
  <BlockQuotation
    author="Steve Wozniak"
    sub-cite="Lorem Ipsum"
  >
    Never trust a computer you can’t throw out a small window.
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
