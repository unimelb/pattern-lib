import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

storiesOf('Pathfinder/Image card', module)
  .add('Image card', createStory(Story1))
  .add('No image', createStory(Story2));
/* ##Story goes here */
