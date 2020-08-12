import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';

/* News Listing Cards */
storiesOf('Cards/Image Listing', module)
  .add('Standalone', createStory(Story1))
  .add('Grid 4 column', createStory(Story2));
/* ##Story goes here */
