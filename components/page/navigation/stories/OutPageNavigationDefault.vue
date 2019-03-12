<template>
  <OutPageNavigation
    :card-links="cardData"
    color="navy"
    card-title="out of this page:"/>
</template>

<script>
import OutPageNavigation from '../OutPageNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(`" Use one of those colors: 'navy', 'teal', 'yellow', 'emerald', 'orange', 'green', 'purple', 'pink' " 
<out-page-navigation color="navy" card-links="[{
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
  readme: { custom: out, source: true },
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
