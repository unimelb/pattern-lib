import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import BoilerplateFooter from './BoilerplateFooter.vue';

const markup = new RenderMarkup(BoilerplateFooter);

storiesOf('Footer', module)
  .add(
    'Boilerplate code insert',
    withReadme(markup.minifiedMarkup + markup.prettifiedMarkup, () => BoilerplateFooter)
  );
