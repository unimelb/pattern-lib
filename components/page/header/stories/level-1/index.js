import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Level1Default from './Level1Default.vue';
import Level1Entity from './Level1Entity.vue';
import Level1DualEntity from './Level1DualEntity.vue';

storiesOf('Page / Header / Level 1', module)
  .add('Default', createStory(Level1Default))
  .add('Entity identifier', createStory(Level1Entity))
  .add('Dual entity identifier', createStory(Level1DualEntity));
