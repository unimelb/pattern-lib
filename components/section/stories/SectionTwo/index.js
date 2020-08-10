import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
import Story6 from './Story6.vue';
/* ##Import story component here */

/* Section - Focus  */
storiesOf('Section/Two Column', module)
  .add('Left', createStory(Story1))
  .add('Right', createStory(Story2))
  .add('In small section', createStory(Story3))
  .add('With text in sidebar', createStory(Story4))
  .add('Right with round image', createStory(Story5))
  .add('Header text with cta button', createStory(Story6));

/* ##Story goes here */
