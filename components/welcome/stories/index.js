import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* Section - Focus  */
storiesOf('Welcome', module)
  .add('Default', createStory(Story1))
  .add('Small width', createStory(Story2));
/* ##Story goes here */
