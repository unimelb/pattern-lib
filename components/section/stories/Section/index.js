import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
/* ##Import story component here */

/* Section - Focus  */
storiesOf('Section/Section', module)
  .add('BG - White', createStory(Story1))
  .add('BG - Inverted', createStory(Story2))
  .add('BG - Alt', createStory(Story3))
  .add('Small', createStory(Story4));
/* ##Story goes here */ 
