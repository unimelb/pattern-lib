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
    items: [{ href: '/', text: 'About us' }],
  }),
};
</script>
