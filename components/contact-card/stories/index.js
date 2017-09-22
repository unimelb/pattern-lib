import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import { pad } from 'decorators';
import ContactCard from './ContactCard.vue';

storiesOf('Contact card', module)
  .addDecorator(pad)
  .add(
    'One column', () =>   ({
      components: { ContactCard },
      template: `<contact-card :columns="1" />`
    })
  )
  .add(
    'Two column', () =>   ({
      components: { ContactCard },
      template: `<contact-card :columns="2" />`
    })
  )
  .add(
    'Three column',() => ({
      components: { ContactCard },
      template: `<contact-card :columns="3" />`
    })
  )
  .add(
    'With map',() => ({
      components: { ContactCard },
      template: `<contact-card :columns="3" :withMap="true" />`
    })
  );
