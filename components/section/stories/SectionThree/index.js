import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
/* ##Import story component here */

/* Section - Focus  */
storiesOf('Section/Three Column', module)
  .add('Header text with cta button', createStory(Story1));

/* ##Story goes here */
