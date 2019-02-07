<template>
  <InPageNavigation
    :card-links="cardData"
    card-title="on this page:"/>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';

export default {
  components: { InPageNavigation },
  data() {
    return {
      cardData: [{
        title: 'Conservatorium Directorate',
        url: 'google.com',
      }, {
        title: 'Conservatorium Directorate',
        url: 'google.com',
      },
      {
        title: 'Conservatorium Directorate',
        url: 'google.com',
      }],
    };
  },
};
</script>
