import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

storiesOf('Pathfinder/Contextual Link', module)
  .add('3 Boxes', createStory(Story1))
  .add('4 Boxes', createStory(Story2))
  .add('Longer titles', createStory(Story3))
  /* ##Story goes here */ 
;
