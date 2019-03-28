import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import Story1 from './Story1.vue';

storiesOf('Filters', module)
  .add('Filter default', createStory(Story1))
;