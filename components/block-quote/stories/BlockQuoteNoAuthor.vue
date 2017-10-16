<template>
  <BlockQuote>Java is, in many ways, C++–.</BlockQuote>
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
