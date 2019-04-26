import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import FilterDefault from './FilterDefault.vue';
import FilterShowcase from './FilterShowcase.vue';

storiesOf('Filter', module)
  .add('Filter', createStory(FilterDefault))
  .add('Filter Showcase', createStory(FilterShowcase));
