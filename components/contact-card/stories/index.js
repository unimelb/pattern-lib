import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import { pad } from 'decorators';

import RenderMarkup from '../../RenderMarkup';
import ContactCard from './ContactCard.vue';

const markup1 = new RenderMarkup(ContactCard, { props: { columns: 1 } });
const markup2 = new RenderMarkup(ContactCard, { props: { columns: 2 } });
const markup3 = new RenderMarkup(ContactCard, { props: { columns: 3 } });
const markupMap = new RenderMarkup(ContactCard, { props: { columns: 3, withMap: true } });

storiesOf('Contact card', module)
  .addDecorator(pad)

  .add(
    'One column',
    withReadme(markup1.prettifiedMarkup, () => ({
      components: { ContactCard },
      template: '<contact-card :columns="1" />',
    }))
  )

  .add(
    'Two column',
    withReadme(markup2.prettifiedMarkup, () => ({
      components: { ContactCard },
      template: '<contact-card :columns="2" />',
    }))
  )

  .add(
    'Three column',
    withReadme(markup3.prettifiedMarkup, () => ({
      components: { ContactCard },
      template: '<contact-card :columns="3" />',
    }))
  )

  .add(
    'With map',
    withReadme(markupMap.prettifiedMarkup, () => ({
      components: { ContactCard },
      template: '<contact-card :columns="3" :withMap="true" />',
    }))
  );
