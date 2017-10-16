import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* News Listing Cards */
storiesOf('Cards/News', module)
  .add('3 Column', createStory(Story1))
  .add('1 Column', createStory(Story2))
  /* ##Story goes here */ 
;
