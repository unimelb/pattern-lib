import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

/* Header for biography pages */
storiesOf('Cards/Course', module)
  .add('Card Course', createStory(Story1))
  .add('Card Course List', createStory(Story2))
  .add('Card Course with search query', createStory(Story3));
/* ##Story goes here */
