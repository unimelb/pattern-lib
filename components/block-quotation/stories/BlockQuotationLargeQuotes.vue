<template>
  <BlockQuotation
    author="Steve Wozniak"
    large-quotes>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit harum dolorem sapiente, ab possimus molestias impedit nostrum quidem modi suscipit saepe ullam quas nemo inventore animi eaque, similique velit.
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
