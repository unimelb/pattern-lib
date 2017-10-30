import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';

storiesOf('Listing/Container', module)
  .add('1 Column', createStory(Story1))
  .add('2 Column', createStory(Story2))
  .add('3 Column', createStory(Story3))
  .add('4 Column', createStory(Story4));
