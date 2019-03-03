import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* Focus Boxes */
storiesOf('Focus Wrapper', module)
  .add('Focus wrapper default', createStory(Story1))
  .add('Focus wrapper with component children', createStory(Story2));
/* ##Story goes here */
