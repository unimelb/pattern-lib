<template>
  <PageBreadcrumbs :items="items" />
</template>

<script>
import PageBreadcrumbs from '../PageBreadcrumbs.vue';
import PageBreadcrumbsDocs from './page-breadcrumbs-docs.md';

export default {
  components: { PageBreadcrumbs },
  readme: { custom: PageBreadcrumbsDocs, source: true, html: true },
  data: () => ({
    items: [
      { href: '/', text: 'About us' },
      { href: '/strategy', text: 'Strategy and governance' },
      { href: '/strategy/growing-esteem', text: 'Growing Esteem' },
      {
        href: '/strategy/growing-esteem/learning-and-teaching',
        text: 'Learning and teaching',
      },
      {
        href:
          '/strategy/growing-esteem/learning-and-teaching/key-facts-and-figures',
        text: 'Key facts and figures',
      },
    ],
  }),
};
</script>
