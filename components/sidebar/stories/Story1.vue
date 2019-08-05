<template>
  <section-wrap>
    <div class="grid">
      <div class="cell cell--tab-1of3">
        <Sidebar
          :items="items"
          title="Event information"
          title-icon="info"
          button-text="Book tickets"/>
      </div>
    </div>
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
