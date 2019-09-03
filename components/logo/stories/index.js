import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import Default from './Default.vue';
import Small from './Small.vue';
import Medium from './Medium.vue';
import Large from './Large.vue';
import NoPadding from './NoPadding.vue';

storiesOf('Logo', module)
  .add('Default (Large)', createStory(Default))
  .add('Small', createStory(Small))
  .add('Medium', createStory(Medium))
  .add('Large', createStory(Large))
  .add('No Padding', createStory(NoPadding));
