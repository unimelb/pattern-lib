<template>
  <CardArticleLarge
    href="https://www.unimelb.edu.au/"
    title="Test title"
    category="Test category"
    description="Nisi labore mollit occaecat nisi et irure esse mollit veniam in."
    :img="{ src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' }" />
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
