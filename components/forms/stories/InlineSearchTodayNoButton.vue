<template>
  <div>
    <h2 class="heading-xxs">
      Without submit button - for search as you type results
    </h2>
    <InlineSearch
      id="site-search-2"
      name="query"
      label="Search courses. Typing automatically updates the results below"
      placeholder="Search courses"
      class="shim-mb1" />
  </div>
</template>

<script>
import InlineSearch from '../InlineSearch.vue';
import inlineSearchDocs from './inline-search.md';

export default {
  readme: { custom: inlineSearchDocs, source: true, html: true },
  components: {
    InlineSearch,
  },
};
</script>
