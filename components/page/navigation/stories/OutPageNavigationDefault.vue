<template>
  <OutPageNavigation
    :card-links="cardData"
    card-title="out of this page:"/>
</template>

<script>
import OutPageNavigation from '../OutPageNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(`  <out-page-navigation card-links="[{
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
    card-title="out of this page:">
    </out-page-navigation>
    `);

export default {
  components: { OutPageNavigation },
  readme: { custom: out, source: false },
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
