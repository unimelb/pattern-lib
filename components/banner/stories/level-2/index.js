import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Level2Default from './Level2Default.vue';
import Level2WithEntity from './Level2WithEntity.vue';

storiesOf('Banner/Level 2', module)
  .add('Default', createStory(Level2Default))
  .add('With entity', createStory(Level2WithEntity));
