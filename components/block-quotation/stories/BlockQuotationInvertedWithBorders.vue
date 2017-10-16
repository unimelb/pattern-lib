<template>
  <BlockQuotation
    author="Homer Simpson"
    border-top
    border-bottom
  >
    The Internet? Is that thing still around?
  </BlockQuotation>
</template>

<script>
import BlockQuotation from '../BlockQuotation.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { BlockQuotation },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml', bg: 'inverted' },
};
</script>
