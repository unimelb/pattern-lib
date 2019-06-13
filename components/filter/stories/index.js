import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';

storiesOf('Filter', module)
  .add('Default', createStory(Story1))
  .add('Story2', createStory(Story2))
  .add('Story3', createStory(Story3));
