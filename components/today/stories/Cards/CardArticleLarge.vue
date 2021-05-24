<template>
  <CardArticleLarge
    href="https://www.unimelb.edu.au/"
    category="Latest research"
    title="How Indigenous knowledge can save our environment"
    description="Wiradjuri man and geographer Associate Professor Michael-Shawn Fletcher explores the guiding principles of landscape management to create resources or resource availability in a landscape and to provide a secure place to live."
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
