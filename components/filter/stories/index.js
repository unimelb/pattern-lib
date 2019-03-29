import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import FilterDefault from './FilterDefault.vue';

storiesOf('Filters', module)
  .add('Filter', createStory(FilterDefault));
