<template>
  <BlockQuote
    author="Homer Simpson"
    border-top
    border-bottom
  >
    The Internet? Is that thing still around?
  </BlockQuote>
</template>

<script>
import BlockQuote from '../BlockQuote.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { BlockQuote },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
};
</script>
