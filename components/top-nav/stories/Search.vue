<template>
  <div class="header-tools__search">
    <a class="icon-link--vertical link" href="#search">
      <svg class="icon-link__icon svg" width="24" height="24" role="presentation" focusable="false">
        <use xlink:href="#icon-search" />
      </svg>
      <span class="icon-link__text">Search</span>
    </a>
    <div class="page-header-search">
      <form action="https://search.unimelb.edu.au" method="get">
        <fieldset class="page-header-search__inline">
          <input class="page-header-search__input" name="q" type="search" placeholder="Search the University" aria-label="Search the University" /><button class="page-header-search__submit" type="submit">
            <svg width="21" height="21" role="presentation" focusable="false">
              <use xlink:href="#icon-search" />
            </svg>
            <span class="screenreaders-only">Go</span>
          </button>
        </fieldset>
        <a class="page-header-icon icon-link--close" href="#">
          <svg class="page-header-search__icon" width="24" height="24" role="presentation" focusable="false">
            <use xlink:href="#icon-close" />
          </svg>
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
