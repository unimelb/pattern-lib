import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import ContactCard from './ContactCard.vue';

const GMAPSJSAPIKEY = 'AIzaSyCN3Soebworjm6dilkDjyRapS0m4i-kfCI';

storiesOf('Contact card', module)
  .add('One column', () =>   ({
    components: { ContactCard },
    template: `<contact-card :columns="1" />`
  }))
  .add('Two column', () =>   ({
    components: { ContactCard },
    template: `<contact-card :columns="2" />`
  }))
  .add('Three column', () => ({
    components: { ContactCard },
    template: `<contact-card :columns="3" />`
  }))
  .add('With map', () =>     ({
    components: { ContactCard },
    mounted: () => { loadGMaps() },
    template: `<contact-card :columns="3" :map="true" />`
  }));
