<template>
  <BlockQuote author="Steve Wozniak">Never trust a computer you can’t throw out a window.</BlockQuote>
</template>

<script>
import BlockQuote from '../BlockQuote.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { BlockQuote },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml', bg: 'inverted' },
};
</script>
