<template>
  <section-wrap>
    <div class="grid">
      <Sidebar
        :items="items"
        title="Event information"
        title-icon="info"
        button-text="Book tickets"
        button-link="www.unimelb.edu.au" />
    </div>
  </section-wrap>
</template>

<script>
import Sidebar from '../Sidebar.vue';
import sample from '../sample.json';
import sidebar from '../sidebar.md';

export default {
  components: { Sidebar },
  readme: { custom: sidebar, source: false, html: false },
  data() {
    return {
      items: sample,
    };
  },
};
</script>
