import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
import Story6 from './Story6.vue';
/* ##Import story component here */

storiesOf('Pathfinder/Contextual Link', module)
  .add('3 Boxes', createStory(Story1))
  .add('4 Boxes', createStory(Story2))
  .add('Longer titles', createStory(Story3))
  .add('No Image', createStory(Story4))
  .add('Legacy markup', createStory(Story5))
  .add('No Image inverted', createStory(Story6));
/* ##Story goes here */
