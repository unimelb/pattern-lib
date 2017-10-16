<template>
  <BlockQuotation>Java is, in many ways, C++–.</BlockQuotation>
</template>

<script>
import BlockQuotation from '../BlockQuotation.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { BlockQuotation },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
};
</script>
