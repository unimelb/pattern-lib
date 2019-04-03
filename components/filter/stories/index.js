import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import FilterDefault from './FilterDefault.vue';
import FilterTest from './FilterTest.vue';

storiesOf('Filter', module)
  .add('Filter', createStory(FilterDefault))
  .add('Filter Test', createStory(FilterTest));
