import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import Default from './Default.vue';

storiesOf('Logo Farm', module)
  .add('Default (5 column)', createStory(Default));
