import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
/* ##Import story component here */

/* News Listing Cards */
storiesOf('Listing/Image Listing', module)
  .add('Three Column', createStory(Story1))
  .add('Two Column', createStory(Story3))
  .add('Color variations', createStory(Story4))
  .add('No Padding (Brand hub variation)', createStory(Story5))
  .add('Hero Image', createStory(Story2));
/* ##Story goes here */
