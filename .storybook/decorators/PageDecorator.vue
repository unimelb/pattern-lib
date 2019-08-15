<template>
  <div>
    <PageHeader
      :level="2"
      title="Strategy and governance"
      img="https://placeimg.com/990/530/arch/1" />
    <PageBreadcrumbs :items="breadcrumbsItems" />
    <slot/>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from 'components/header/PageHeader.vue';
import PageFooter from 'components/footer/PageFooter.vue';
import PageBreadcrumbs from 'components/breadcrumbs/PageBreadcrumbs.vue';

export default {
  components: { PageHeader, PageFooter, PageBreadcrumbs },
  data: () => ({
    breadcrumbsItems: [
      { href: '/', text: 'About us' },
      { href: '/strategy', text: 'Strategy and governance' },
    ],
  }),
};
</script>
