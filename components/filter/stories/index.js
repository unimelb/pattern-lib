import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';

storiesOf('Filter / Components', module)
  .add('Breadth', createStory(Story1));

storiesOf('Filter / Elements', module)
  .add('Input', createStory(Story2))
  .add('Dropdown', createStory(Story3))
  .add('Checkbox', createStory(Story4));
