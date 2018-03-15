<template>
  <div>
    <MegaMenuNoBreadcrumbs>
      <SearchIntegratedNav class="elevated" />
    </MegaMenuNoBreadcrumbs>
  </div>
</template>

<script>
import MegaMenuNoBreadcrumbs from './MegaMenuNoBreadcrumbs.vue';
import SearchIntegratedNav from '../../nav/stories/SearchIntegratedNav.vue';

export default {
  name: 'mega-menu-no-breadcrumbs',
  components: { MegaMenuNoBreadcrumbs, SearchIntegratedNav },
};
</script>
