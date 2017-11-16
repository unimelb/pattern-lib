import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
import Story6 from './Story6.vue';
import Story7 from './Story7.vue';
import Story8 from './Story8.vue';
import Story9 from './Story9.vue';
import Story10 from './Story10.vue';
import Story11 from './Story11.vue';
import Story12 from './Story12.vue';

storiesOf('Figure', module)
  .add('medium inset right figure', createStory(Story2))
  .add('medium inset left figure', createStory(Story3))
  .add('Small inset left figure', createStory(Story4))
  .add('Small inset right figure', createStory(Story5))
  .add('large inset left figure', createStory(Story6))
  .add('large inset right figure', createStory(Story7))
  .add('Used together', createStory(Story8))
  .add('With Progressive Images', createStory(Story9))
  .add('Inline - Full', createStory(Story1))
  .add('Inline - Large', createStory(Story10))
  .add('Inline - Medium', createStory(Story11))
  .add('Inline - small', createStory(Story12));
