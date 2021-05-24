<template>
  <CardFlat
    title="Our campuses"
    description="Located a short walk from central Melbourne, our main campus anchors a network of three urban innovation precincts and six specialist campuses located throughout Victoria."
    :cta="{ href: 'https://www.unimelb.edu.au/', text: 'Virtual campus tours' }"
    :img="{ src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' }" />
</template>

<script>
import CardFlat from 'components/cards/CardFlat.vue';
import CardFlatMd from './CardFlat.md';

export default {
  components: { CardFlat },
  readme: { custom: CardFlatMd, source: true, html: false },
};
</script>
