import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

/* Section - Staff Listing  */
storiesOf('Cards/Staff List/Division Head', module)
  .add('Division Head (3 Col)', createStory(Story1))
  .add('Division Heads (Single)', createStory(Story2))
  .add('Division Heads (Compact)', createStory(Story3));
/* ##Story goes here */
