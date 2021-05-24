<template>
  <CardArticle
    href="https://www.unimelb.edu.au/"
    title="What we know about the vaccine rollout"
    category="COVID-19" />
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
