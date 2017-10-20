import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Level3Default from './Level3Default.vue';

storiesOf('Page / Header / Level 3', module)
  .add('Default', createStory(Level3Default));
