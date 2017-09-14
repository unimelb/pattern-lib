import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Sprite from './Sprite.vue';

storiesOf('Icons', module)
  .add('Sprite', () => ({
    components: { Sprite },
    template: `<sprite />`
  }));
