<template>
  <div>
    <h2 class="heading-xxs">
      With submit button
    </h2>
    <InlineSearch
      id="site-search-1"
      name="query"
      label="Search courses"
      placeholder="Search courses"
      action="https://search.unimelb.edu.au/s/search.html"
      with-submit
      class="shim-mb1">
      <input
        type="hidden"
        name="collection"
        value="gs-meta">
    </InlineSearch>
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
