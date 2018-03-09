<template>
  <nav class="header-tools">
    <PageNav title="About us">
      <PageSearchForm />
      <ul>
        <li><a href="/leadership">Leadership</a></li>
        <li><a href="/our-history">Our history</a></li>
        <li><a href="/our-vision">Our vision</a></li>
        <li><a href="/strategy">Strategy and governance</a></li>
      </ul>
      <ul class="sitenav__meta">
        <li><a href="https://search.unimelb.edu.au">Search</a></li>
      </ul>
    </PageNav>
  </nav>
</template>

<script>
import PageNav from '../PageNav.vue';
import PageSearchForm from '../../search/PageSearchForm.vue';

export default {
  components: { PageNav, PageSearchForm },
  readme: { html: true, source: false },
};
</script>
