<template>
  <div>
    <h2 class="heading-xxs">
      On dark backgrounds
    </h2>
    <div
      class="bg-inverted"
      style="padding: 3rem;">
      <InlineSearch
        id="site-search-3"
        name="query"
        label="Search courses"
        placeholder="Search courses"
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
