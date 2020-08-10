import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import Default from './Default.vue';

storiesOf('Todo List', module)
  .add('Default', createStory(Default));
