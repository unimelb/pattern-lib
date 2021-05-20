<template>
  <CardFlat
    title="Test Title"
    description="Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur."
    :cta="{ href: 'https://www.unimelb.edu.au/', text: 'Cta button' }"
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
