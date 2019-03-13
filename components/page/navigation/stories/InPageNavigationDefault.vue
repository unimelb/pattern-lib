<template>
  <in-page-navigation
    color="navy"
    title="on this page"
    heading-level="h2"/>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';
import inPageNavigationDocs from './in-page-navigation-docs.md';

export default {
  components: { InPageNavigation },
  readme: { custom: inPageNavigationDocs, source: true, html: true },
};
</script>
