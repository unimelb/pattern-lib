<template>
  <div class="header-tools__search">
    <a class="link-icon--vertical link-reset" href="#search">
      <SvgIcon class="link-icon__icon svg" name="search" />
      <span class="link-icon__text">Search</span>
    </a>
    <div class="page-header-search">
      <form action="https://search.unimelb.edu.au" method="get">
        <fieldset class="page-header-search__inline">
          <input class="page-header-search__input" name="q" type="search" placeholder="Search the University" aria-label="Search the University"><button class="page-header-search__submit" type="submit">
            <SvgIcon class="page-header-search__icon" name="search" />
            <span class="screenreaders-only">Go</span>
          </button>
        </fieldset>
        <a class="page-header-icon link-icon--close" href="#">
          <SvgIcon class="page-header-search__icon--close" name="close" />
          Close
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import Search from './search';
import SvgIcon from './../../icons/SvgIcon.vue';

export default {
  name: 'page-search',
  components: { SvgIcon },
  domFriendly: true,
  mounted() {
    this.actor = new Search();
  },
};
</script>
