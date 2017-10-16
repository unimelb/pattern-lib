import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

/* Header for biography pages */
storiesOf('Cards/Bio Header', module)
  .add('Small (Default)', createStory(Story1))
  .add('Wide', createStory(Story2))
  .add('With content', createStory(Story3))
  /* ##Story goes here */ 
;
