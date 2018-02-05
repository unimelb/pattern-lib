import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Sprite from './Sprite.vue';
import AboutUs from './AboutUs.vue';

storiesOf('Icons', module)
  .add('Sprite', createStory(Sprite))
  .add('About us set', createStory(AboutUs));
