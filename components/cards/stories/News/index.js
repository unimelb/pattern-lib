import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
/* ##Import story component here */

/* News Listing Cards */
storiesOf('Cards/News', module)
  .add('3 Column', createStory(Story1))
  .add('1 Column', createStory(Story2))
  .add('Buttons Underneath', createStory(Story3))
  .add('News Card with Tags', createStory(Story4));
/* ##Story goes here */
