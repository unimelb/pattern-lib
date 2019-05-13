import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import Story1 from './Story1.vue';

storiesOf('Breadth', module)
  .add('Default', createStory(Story1));
