<template>
  <CardArticleList
    :items="items" />
</template>

<script>
import CardArticleList from 'components/cards/CardArticleList.vue';
import CardArticleListMd from './CardArticleList.md';

export default {
  components: {
    CardArticleList,
  },
  readme: {
    custom: CardArticleListMd,
    source: true,
    html: true,
  },
  data() {
    return {
      items: [
        {
          href: 'https://www.unimelb.edu.au/',
          title: 'Test title',
          category: 'Test category',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          title: 'Test title',
          category: 'Test category',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          title: 'Test title',
          category: 'Test category',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          title: 'Test title',
          category: 'Test category',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          title: 'Test title',
          category: 'Test category',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          title: 'Test title',
          category: 'Test category',
        },
      ],
    };
  },
};
</script>
