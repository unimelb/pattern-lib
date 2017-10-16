import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Level1Default from './Level1Default.vue';
import Level1WithEntity from './Level1WithEntity.vue';

storiesOf('Page Header/Level 1', module)
  .add('Default', createStory(Level1Default))
  .add('With entity', createStory(Level1WithEntity));
