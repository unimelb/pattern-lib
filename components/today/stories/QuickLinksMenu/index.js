import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Links from './Links.vue';
import Buttons from './Buttons.vue';
import ButtonsWithSearchQuery from './ButtonsWithSearchQuery.vue';

storiesOf('Today/Quick Links Menu', module)
  .add('Links', createStory(Links))
  .add('Buttons', createStory(Buttons))
  .add('Buttons (with search query)', createStory(ButtonsWithSearchQuery));
