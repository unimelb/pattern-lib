<template>
  <ContentBlock size="sm">
    <h2>Example Title</h2>
    <p
      class="lead">
      As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
  </ContentBlock>
</template>

<script>
import ContentBlock from '../ContentBlock.vue';

export default {
  components: { ContentBlock },
  readme: { source: true, html: true },
};
</script>
