<template>
  <section-wrap>
    <Sidebar
      :items="items"
      title="Event information"
      title-icon="info"
      button-text="Book tickets"/>
  </section-wrap>
</template>

<script>
import Sidebar from '../Sidebar.vue';
import sample from '../sample.json';
import sidebar from '../sidebar.md';

export default {
  components: { Sidebar },
  readme: { custom: sidebar, source: true, html: false },
  data() {
    return {
      items: sample,
    };
  },
};
</script>
