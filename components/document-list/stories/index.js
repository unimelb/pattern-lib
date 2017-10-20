import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';

storiesOf('Document List', module)
  .add('Download block', createStory(Story1))
  .add('Document List', createStory(Story2))
  .add('Document thumbnail list', createStory(Story3))
  .add('Document thumbnail list - four col', createStory(Story4));
