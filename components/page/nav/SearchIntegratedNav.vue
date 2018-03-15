<template>
  <nav class="header-tools">
    <PageNav :title="title">
      <PageSearchForm />
      <slot></slot>
    </PageNav>
  </nav>
</template>

<script>
import PageNav from './PageNav.vue';
import PageSearchForm from '../search/PageSearchForm.vue';

export default {
  name: 'search-integrated-nav',
  components: { PageNav, PageSearchForm },
  props: {
    title: String,
    default: 'Navigation',
  },
};
</script>
