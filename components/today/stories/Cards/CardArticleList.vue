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
          category: 'COVID-19',
          title: 'What we know about the vaccine rollout',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'Global partnership',
          title: 'A new quantum computing lab with IBM',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'Climate futures',
          title: 'Climate conversations: Australia in 2021',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'COVID-19',
          title: 'What we know about the vaccine rollout',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'Global partnership',
          title: 'A new quantum computing lab with IBM',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'Climate futures',
          title: 'Climate conversations: Australia in 2021',
        },
      ],
    };
  },
};
</script>
