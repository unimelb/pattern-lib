import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* News Listing Cards */
storiesOf('Cards/GenericCard', module)
  .add('With sub-title', createStory(Story1))
  .add('With sub-title and SvgIcon', createStory(Story2));
/* ##Story goes here */
