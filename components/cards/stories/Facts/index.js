import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
/* ##Import story component here */

/* Facts module */
storiesOf('Cards/Facts', module)
  .add('Size variations', createStory(Story1))
  .add('With Icons', createStory(Story2))
  .add('with Icon Single row', createStory(Story3))
  .add('Smaller header class', createStory(Story4))
  .add('Top border, specify colour', createStory(Story5));
