import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../../.storybook/utils';

import Story1 from './Story1.vue';

/* ##Import story component here */

/* News Listing Cards */
storiesOf('Cards/Profiles', module)
  .add('Showcase Performer Profile', createStory(Story1));
/* ##Story goes here */
