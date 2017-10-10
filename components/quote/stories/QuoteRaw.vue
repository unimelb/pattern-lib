<template>
  <blockquote>
    <p>The question of whether computers can think is like the question of whether submarines can swim.</p>
    <cite>Edsger W. Dijkstra</cite>
  </blockquote>
</template>

<script>
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  decorator: ContentBlock,
  decoratorProps: { small: true },
};
</script>
