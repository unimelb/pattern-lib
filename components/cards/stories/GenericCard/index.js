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
import Story7 from './Story7.vue';
/* ##Import story component here */

/* News Listing Cards */
storiesOf('Cards/GenericCard', module)
  .add('2 Cols', createStory(Story1))
  .add('3 Cols', createStory(Story2))
  .add('With sub-title', createStory(Story3))
  .add('With sub-title and SvgIcon', createStory(Story4))
  .add('With with 3 subtitles', createStory(Story5))
  .add('With with links', createStory(Story6))
  .add('BG inverted', createStory(Story7));
/* ##Story goes here */
