<template>
  <CardArticle
    href="https://www.unimelb.edu.au/"
    title="Test title"
    category="Test category" />
</template>

<script>
import CardArticle from 'components/cards/CardArticle.vue';

export default {
  components: {
    CardArticle,
  },
  readme: {
    source: true,
    html: true,
  },
};
</script>
