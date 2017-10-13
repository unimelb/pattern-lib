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
    ]
  })
};
</script>
