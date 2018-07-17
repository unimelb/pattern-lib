import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
/* ##Import story component here */

storiesOf('Pathfinder/Image card', module)
  .add('Image card', createStory(Story1))
  .add('Image card (2 column)', createStory(Story3))
  .add('No image', createStory(Story2))
  .add('No image (2 column)', createStory(Story4));
/* ##Story goes here */
