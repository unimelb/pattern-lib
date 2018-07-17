import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* Section - Crest */
storiesOf('Side Panel/Left', module)
  .add('With section', createStory(Story1))
  .add('With content blocks', createStory(Story2));
/* ##Story goes here */
