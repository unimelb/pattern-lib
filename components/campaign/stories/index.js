import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import Default from './Default.vue';
import BlackBg from './BlackBg.vue';

storiesOf('Campaign', module)
  .add('Default', createStory(Default))
  .add('Black Background', createStory(BlackBg));
