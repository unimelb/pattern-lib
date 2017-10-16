import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
/* ##Import story component here */

/* Section - Focus  */
storiesOf('Section/Focus', module)
  .add('Default', createStory(Story1))
  .add('Wide width', createStory(Story2))
  .add('Progressive background image', createStory(Story3))
  .add('Colour variations', createStory(Story4));
/* ##Story goes here */

