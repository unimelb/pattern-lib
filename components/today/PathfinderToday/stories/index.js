import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

storiesOf('Today/Pathfinder', module)
  .add('Default', createStory(Story1))
  .add('Inline Dark', createStory(Story2))
  .add('Slot', createStory(Story3));
/* ##Story goes here */
