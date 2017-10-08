import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';

import Sprite from './Sprite.vue';
import docs from './docs.md';

storiesOf('Icons', module)
  .addDecorator(withReadme(docs))
  .add('Sprite', () => ({
    components: { Sprite },
    template: '<sprite />',
  }));
