import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Sprite from './Sprite.vue';

storiesOf('Icons', module)
  .add('Sprite', createStory(Sprite));
