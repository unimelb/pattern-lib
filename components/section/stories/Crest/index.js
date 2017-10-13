import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

/* Section - Crest  */
storiesOf('Section/Crest', module)
  .add('Small width', createStory(Story1))
  .add('Divider', createStory(Story2))
  .add('Divider - subtitle', createStory(Story3))
  /* ##Story goes here */ 
;
