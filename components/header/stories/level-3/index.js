import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Level3Default from './Level3Default.vue';
import Level3Alt from './Level3Alt.vue';

storiesOf('Header/Level 3', module)
  .add('Default', createStory(Level3Default))
  .add('Alt', createStory(Level3Alt));
