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
    ],
  }),
};
</script>
