<template>
  <div class="header-tools__search">
    <a class="icon-link--vertical link-reset" href="#search">
      <icon class="icon-link__icon svg" name="search" />
      <span class="icon-link__text">Search</span>
    </a>
    <div class="page-header-search">
      <form action="https://search.unimelb.edu.au" method="get">
        <fieldset class="page-header-search__inline">
          <input class="page-header-search__input" name="q" type="search" placeholder="Search the University" aria-label="Search the University" /><button class="page-header-search__submit" type="submit">
            <icon class="page-header-search__icon" name="search" />
            <span class="screenreaders-only">Go</span>
          </button>
        </fieldset>
        <a class="page-header-icon icon-link--close" href="#">
          <icon class="page-header-search__icon--close" name="close" />
          Close
        </a>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search'
  };
</script>
