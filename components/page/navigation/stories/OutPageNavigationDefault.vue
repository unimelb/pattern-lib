<template>
  <OutPageNavigation
    :card-links="cardData"
    color="navy"
    card-title="out of this page:"/>
</template>

<script>
import OutPageNavigation from '../OutPageNavigation.vue';
import outPageNavigationDocs from './out-page-navigation-docs.md';

export default {
  components: { OutPageNavigation },
  readme: { custom: outPageNavigationDocs, source: true },
  data() {
    return {
      cardData: [
        {
          title: 'Conservatorium Directorate',
          url: 'google.com',
        },
        {
          title: 'Conservatorium Directorate',
          url: 'google.com',
        },
        {
          title: 'Conservatorium Directorate',
          url: 'google.com',
        },
      ],
    };
  },
};
</script>
