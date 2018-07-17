import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';

storiesOf('Cards/Contact', module)
  .add('One column', createStory(Story1))
  .add('Two column', createStory(Story2))
  .add('Three column', createStory(Story3))
  .add('With map', createStory(Story4));
