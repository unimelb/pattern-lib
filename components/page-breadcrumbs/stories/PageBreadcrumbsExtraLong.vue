<template>
  <PageBreadcrumbs :items="items" />
</template>

<script>
import PageBreadcrumbs from '../PageBreadcrumbs.vue';

export default {
  components: { PageBreadcrumbs },
  data: () => ({
    items: [
      { href: '/', text: 'About us' },
      { href: '/strategy', text: 'Strategy and governance' },
      { href: '/strategy/growing-esteem', text: 'Growing Esteem' },
      { href: '/strategy/growing-esteem/learning-and-teaching', text: 'Learning and teaching' },
      { href: '/strategy/growing-esteem/learning-and-teaching/key-facts-and-figures', text: 'Key facts and figures' },
    ],
  }),
};
</script>
