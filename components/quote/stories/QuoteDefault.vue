<template>
  <quote author="Steve Wozniak">Never trust a computer you can’t throw out a window.</quote>
</template>

<script>
import Quote from '../Quote.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { Quote },
  decorator: ContentBlock,
  decoratorProps: { small: true },
};
</script>
