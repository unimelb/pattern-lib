import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
import Story6 from './Story6.vue';

/* ##Import story component here */

/* Section - Focus  */
storiesOf('Section/Section', module)
  .add('BG - White', createStory(Story1))
  .add('BG - Black', createStory(Story6))
  .add('BG - Inverted', createStory(Story2))
  .add('BG - Alt', createStory(Story3))
  .add('Small', createStory(Story4))
  .add('BG - Two BG', createStory(Story5));

/* ##Story goes here */
