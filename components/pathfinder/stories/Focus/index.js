import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
/* ##Import story component here */

storiesOf('Pathfinder/Focus', module)
  .add('Focus pathfinder', createStory(Story1))
  .add('Compact Focus pathfinder', createStory(Story2))
  .add('With different image', createStory(Story3));
/* ##Story goes here */
