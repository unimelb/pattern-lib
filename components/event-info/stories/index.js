import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import Story1 from './Story1.vue';


/* ##Import story component here */

/* Focus Boxes */
storiesOf('Event Info', module)
  .add('Default', createStory(Story1));
/* ##Story goes here */
