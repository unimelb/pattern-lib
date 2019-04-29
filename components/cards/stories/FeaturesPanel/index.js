import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

/* Section - Staff Listing  */
storiesOf('Cards/Features Panel', module)
  .add('Features Panel (3 Col)', createStory(Story1))
  .add('Features Panel (2 Col)', createStory(Story2))
  .add('Features Panel no CTA button', createStory(Story3));
/* ##Story goes here */
