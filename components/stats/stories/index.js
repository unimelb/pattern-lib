import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import StatsGroupDefault from './StatsGroupDefault.vue';
import StatsGroupInverted from './StatsGroupInverted.vue';
import StatsGroupInvertedSection from './StatsGroupInvertedSection.vue';

storiesOf('Stats', module)
  .add('Default', createStory(StatsGroupDefault))
  .add('Inverted', createStory(StatsGroupInverted))
  .add('Inverted section with attribution', createStory(StatsGroupInvertedSection));
