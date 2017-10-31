import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';

storiesOf('Timeline', module)
  .add('Simple headers', createStory(Story1))
  .add('Complex headers', createStory(Story2))
  .add('With media', createStory(Story3));
