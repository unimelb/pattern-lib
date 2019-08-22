import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
import Story6 from './Story6.vue';
import Story7 from './Story7.vue';
/* ##Import story component here */

/* Focus Boxes */
storiesOf('Cards/Focus Boxes', module)
  .add('3 Col', createStory(Story1))
  .add('2 Col', createStory(Story2))
  .add('Colour variations', createStory(Story3))
  .add('Alt colour cycle', createStory(Story4))
  .add('Version of no icon - white', createStory(Story5))
  .add('Version of no icon - inverted', createStory(Story6))
  .add('Version of no icon - alt', createStory(Story7));
/* ##Story goes here */
