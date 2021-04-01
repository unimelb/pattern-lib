<template>
  <form
    action="https://search.unimelb.edu.au"
    method="get"
    class="page-header-search__form">
    <input
      ref="input"
      class="page-header-search__input"
      name="q"
      type="search"
      placeholder="Search the University"
      aria-label="Search the University of Melbourne">
    <button
      class="page-header-search__submit"
      type="submit">
      <SvgIcon
        class="page-header-search__icon"
        aria-label="Search"
        :name="'search'" />
      <span class="screenreaders-only">Go</span>
    </button>
    <slot />
  </form>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  name: 'PageSearchForm',
  components: { SvgIcon },
};
</script>
