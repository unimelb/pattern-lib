<template>
  <BlockQuotation
    author="Homer Simpson"
    border-top
    border-bottom
  >The Internet? Is that thing still around?</BlockQuotation>
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
