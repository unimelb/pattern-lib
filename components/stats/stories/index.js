import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import StatsDefault from './StatsDefault.vue';
import StatsInverted from './StatsInverted.vue';
import StatsInvertedSection from './StatsInvertedSection.vue';

storiesOf('Stats', module)
  .add('Default', createStory(StatsDefault))
  .add('Inverted', createStory(StatsInverted))
  .add('Inverted section with attribution', createStory(StatsInvertedSection));
