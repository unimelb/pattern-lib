<template>
  <breadcrumbs :items="items" />
</template>

<script>
import Breadcrumbs from '../Breadcrumbs.vue';

export default {
  components: { Breadcrumbs },
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
