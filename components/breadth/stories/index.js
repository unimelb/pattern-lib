import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';

storiesOf('Breadth', module)
  .add('Default', createStory(Story1))
  .add('Story2', createStory(Story2));
