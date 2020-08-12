<template>
  <CardImageListing
    thumb="https://picsum.photos/640/400"
    aria-label="image alt text"
    heading="Non duis et voluptate culpa anim amet."
    link-name="Register here"
    href="https://www.unimelb.edu.au/" />
</template>

<script>
import CardImageListing from '../../CardImageListing.vue';

export default {
  components: { CardImageListing },
  readme: { source: true, html: true },
};
</script>
