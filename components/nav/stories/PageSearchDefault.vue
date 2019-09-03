<template>
  <nav class="header-tools">
    <PageSearch />
  </nav>
</template>

<script>
import PageSearch from '../../search/PageSearch.vue';

export default {
  components: { PageSearch },
  readme: { html: true, source: false },
};
</script>
