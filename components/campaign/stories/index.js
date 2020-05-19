import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import Default from './Default.vue';
import DarkBg from './DarkBg.vue';
import BannerButtons from './BannerButtons.vue';

storiesOf('Campaign', module)
  .add('Default', createStory(Default))
  .add('Dark Background', createStory(DarkBg))
  .add('Banner with 3 buttons / card', createStory(BannerButtons));
