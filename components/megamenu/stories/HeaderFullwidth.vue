<template>
  <div>
    <header class="page-header page-header--l3 page-header--study">
      <div class="page-header__inner">
        <Logo />
        <PageBreadcrumbs :items="items" />
      </div>
    </header>
  </div>
</template>

<script>
import Logo from '../../logo/Logo.vue';
import PageBreadcrumbs from '../../breadcrumbs/PageBreadcrumbs.vue';

export default {
  name: 'HeaderFullwidth',
  components: { PageBreadcrumbs, Logo },
  data: () => ({
    items: [
      { href: '/', text: 'Study' },
      { href: '/fac', text: 'Find a course' },
    ],
  }),
};
</script>

<style lang="postcss">
.page-header--study {
  .page-header__inner {
    padding-left: 3rem;
  }

  nav {
    background-color: transparent;
  }
}
</style>
