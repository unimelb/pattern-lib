import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';

/* ##Import story component here */

/* Section - Focus  */
storiesOf('Section/Two Column', module)
  .add('Left', createStory(Story1))
  .add('Right', createStory(Story2));

/* ##Story goes here */
