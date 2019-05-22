import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* News Listing Cards */
storiesOf('Cards/Events', module)
  .add('Full width (horizontal)', createStory(Story1))
  .add('Vertical', createStory(Story2));
/* ##Story goes here */
