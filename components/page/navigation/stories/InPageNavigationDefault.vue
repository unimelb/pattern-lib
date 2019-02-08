<template>
  <InPageNavigation
    :card-links="cardData"
    card-title="on this page:"/>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(`  <InPageNavigation card-links="[{
        title: 'Conservatorium Directorate',
        url: 'google.com',
      }, {
        title: 'Conservatorium Directorate',
        url: 'google.com',
      },
      {
        title: 'Conservatorium Directorate',
        url: 'google.com',
      }]"
    card-title="on this page:" />`);

export default {
  components: { InPageNavigation },
  readme: { custom: out, source: false },
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
