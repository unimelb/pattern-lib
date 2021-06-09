<template>
  <div>
    <PageHeaderMin />
    <PageBreadcrumbs :items="items" />
  </div>
</template>

<script>
import PageHeaderMin from '../../PageHeaderMin.vue';
import PageBreadcrumbs from '../../../breadcrumbs/PageBreadcrumbs.vue';

export default {
  components: { PageHeaderMin, PageBreadcrumbs },
  readme: { source: true, html: true },
  data: () => ({
    items: [
      { href: '/', text: 'About us' },
      { href: '/strategy', text: 'Strategy and governance' },
      { href: '/strategy/growing-esteem', text: 'Growing Esteem' },
    ],
  }),
};
</script>
