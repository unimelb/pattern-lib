<template>
  <quote>Java is, in many ways, C++–.</quote>
</template>

<script>
import Quote from '../Quote.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { Quote },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
};
</script>
