<template>
  <SectionAlt>
    <h2 class="screenreaders-only">
      Featured articles
    </h2>
    <CardArticleLarge
      v-if="featuredArticle"
      v-bind="featuredArticle" />
    <CardArticleList
      v-if="articleList"
      :items="articleList" />
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import CardArticleLarge from 'components/cards/CardArticleLarge.vue';
import CardArticleList from 'components/cards/CardArticleList.vue';

import SectionAltMd from './SectionAlt.md';

export default {
  readme: { custom: SectionAltMd, html: true, source: true },
  components: {
    SectionAlt,
    CardArticleLarge,
    CardArticleList,
  },
  data() {
    return {
      featuredArticle: {
        title: 'How Indigenous knowledge can save our environment',
        description: 'Wiradjuri man and geographer Associate Professor Michael-Shawn Fletcher explores the guiding principles of landscape management to create resources or resource availability in a landscape and to provide a secure place to live.',
        category: 'Latest research',
        href: '#',
        img: {
          src: 'https://via.placeholder.com/800x540',
          alt: 'Placeholder image',
        },
      },
      articleList: [
        {
          title: 'What we know about the vaccine rollout',
          category: 'COVID-19',
          href: '#',
        },
        {
          title: 'A new quantum computing lab with IBM',
          category: 'Global partnership',
          href: '#',
        },
        {
          title: 'Climate conversations: Australia in 2021',
          category: 'Climate futures',
          href: '#',
        },
      ],
    };
  },
};
</script>
