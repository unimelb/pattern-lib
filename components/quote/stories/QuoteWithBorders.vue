<template>
  <quote
    author="Homer Simpson"
    border-top
    border-bottom
  >
    The Internet? Is that thing still around?
  </quote>
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
