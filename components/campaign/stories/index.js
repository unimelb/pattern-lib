import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import Default from './Default.vue';

storiesOf('Campaign', module)
  .add('Default', createStory(Default));
