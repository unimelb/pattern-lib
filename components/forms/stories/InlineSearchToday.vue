<template>
  <div>
    <h2 class="heading-xxs">
      With submit button
    </h2>
    <InlineSearch
      id="site-search-1"
      name="query"
      label="Search the University"
      placeholder="Search the University"
      action="https://search.unimelb.edu.au/s/search.html"
      with-submit
      class="shim-mb1">
      <input
        type="hidden"
        name="collection"
        value="gs-meta">
    </InlineSearch>
    <h2 class="heading-xxs">
      Without submit button - for search as you type results
    </h2>
    <InlineSearch
      id="site-search-2"
      name="query"
      label="Search the University. Typing automatically updates the results below"
      placeholder="Search the University"
      class="shim-mb1" />
    <h2 class="heading-xxs">
      On dark backgrounds
    </h2>
    <div
      class="bg-inverted"
      style="padding: 3rem;">
      <InlineSearch
        id="site-search-3"
        name="query"
        label="Search the University"
        placeholder="Search the University"
        action="https://search.unimelb.edu.au/s/search.html"
        with-submit
        dark>
        <input
          type="hidden"
          name="collection"
          value="gs-meta">
      </InlineSearch>
    </div>
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
