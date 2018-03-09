<template>
  <div>
    <header class="page-header page-header--l3 page-header--study">
      <div class="page-header__inner">
        <a class="link-img link-reset" href="https://www.unimelb.edu.au/">
          <img
            class="page-header__logo"
            src="../../../shared/logo.svg"
            width="117" height="117"
            alt="The University of Melbourne homepage"
          >
        </a>
        <MegaMenu class="elevated" />
      </div>
    </header>
  </div>
</template>

<script>
import MegaMenu from './MegaMenu.vue';

export default {
  name: 'mega-menu-no-breadcrumbs',
  components: { MegaMenu },
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
