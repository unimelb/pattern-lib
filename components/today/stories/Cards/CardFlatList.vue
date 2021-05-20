<template>
  <CardFlatList :items="items" />
</template>

<script>
import CardFlatList from 'components/cards/CardFlatList.vue';
import CardFlatListMd from './CardFlatList.md';

export default {
  components: { CardFlatList },
  readme: { custom: CardFlatListMd, source: true, html: false },
  data() {
    return {
      items: [
        {
          title: 'Test Title',
          description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
          img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
        },
        {
          title: 'Test Title',
          description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
          img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
        },
        {
          title: 'Test Title',
          description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
          img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
        },
        {
          title: 'Test Title',
          description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
          img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
        },
      ],
    };
  },
};
</script>
