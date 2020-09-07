import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
import Story6 from './Story6.vue';

/* ##Import story component here */

/* Focus Boxes */
storiesOf('Focus Wrapper', module)
  .add('Default', createStory(Story1))
  .add('Colours', createStory(Story2))
  .add('Padded', createStory(Story4))
  .add('Opaque', createStory(Story5))
  .add('Nesting Components', createStory(Story6));
/* ##Story goes here */
