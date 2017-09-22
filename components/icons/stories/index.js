import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import iconReadme from './icons.md';

import Sprite from './Sprite.vue';

storiesOf('Icons', module)
  .addDecorator(withReadme(iconReadme))
  .add('Sprite', () => ({
    components: { Sprite },
    template: `<sprite />`
  }));
