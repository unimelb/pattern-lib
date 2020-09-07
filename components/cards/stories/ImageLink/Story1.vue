<template>
  <CardImageLink
    thumb="https://picsum.photos/640/400"
    aria-label="image alt text"
    heading="Non duis et voluptate culpa anim amet."
    href="https://www.unimelb.edu.au/" />
</template>

<script>
import CardImageLink from '../../CardImageLink.vue';

export default {
  components: { CardImageLink },
  readme: { source: true, html: true },
};
</script>
