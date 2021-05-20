<template>
  <CardArticleLarge
    href="https://www.unimelb.edu.au/"
    title="Test title"
    category="test category"
    description="Test description"
    :img="{ src: 'https://picsum.photos/seed/1/540/360', alt: 'test alt' }" />
</template>

<script>
import CardArticleLarge from 'components/cards/CardArticleLarge.vue';
import CardArticleLargeMd from './CardArticleLarge.md';

export default {
  components: {
    CardArticleLarge,
  },
  readme: {
    custom: CardArticleLargeMd,
    source: true,
    html: true,
  },
};
</script>
