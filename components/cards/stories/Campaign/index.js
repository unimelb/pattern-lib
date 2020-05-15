import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Story1 from './Story1.vue';
/* ##Import story component here */

/* Facts module */
storiesOf('Cards/Campaign', module)
  .add('Default', createStory(Story1));
