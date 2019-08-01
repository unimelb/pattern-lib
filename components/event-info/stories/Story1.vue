<template>
  <section-wrap>
    <EventInfo
      :items="items"
      title="Event information"
      title-icon="info"
      button-text="Book tickets"/>
  </section-wrap>
</template>

<script>
import EventInfo from '../EventInfo.vue';
import sample from '../sample.json';
import eventInfo from '../event-info.md';

export default {
  components: { EventInfo },
  readme: { custom: eventInfo, source: true, html: false },
  data() {
    return {
      items: sample,
    };
  },
};
</script>
