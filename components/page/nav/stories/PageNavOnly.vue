<template>
  <div class="header-tools">
    <PageNav>
      <h2>About us</h2>
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
  </div>
</template>

<script>
import PageNav from '../PageNav.vue';

export default {
  components: { PageNav },
};
</script>
