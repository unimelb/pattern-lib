import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
/* ##Import story component here */

/* Focus Boxes */
storiesOf('Cards/Focus Boxes', module)
  .add('3 Col', createStory(Story1))
  .add('2 Col', createStory(Story2))
  .add('Colour variations', createStory(Story3))
  .add('Alt colour cycle', createStory(Story4));
/* ##Story goes here */
