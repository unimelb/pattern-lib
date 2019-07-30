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

export default {
  components: { EventInfo },
  readme: { source: true, html: true },
  data() {
    return {
      items: [{
        icon: 'calendar',
        title: 'Dates and Times',
        subtitle1: '20 Nov 19',
        subtitle4: 'test 4',
        subtitle5: 'test 5',
      },
      {
        icon: 'location',
        title: 'Location',
        subtitle1: '20 Nov 19',
        subtitle2: 'test 2',
        subtitle3: 'test 3',
        subtitle4: 'test 4',
        subtitle5: 'test 5',
      },
      {
        icon: 'envelope',
        title: 'Entry requirements',
        subtitle1: '20 Nov 19',
        subtitle2: 'test 2',
      },
      {
        icon: 'phone',
        title: 'Contact information',
        subtitle1: '20 Nov 19',
        subtitle2: 'test 2',
        subtitle3: 'email@unimelb.edu.au',
      },
      {
        icon: 'info',
        title: 'Further information',
        subtitle1: '20 Nov 19',
      }],
    };
  },
};
</script>
