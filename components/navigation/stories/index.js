import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import InPageNavigationDefault from './InPageNavigationDefault.vue';

/* ##Import story component here */

storiesOf('Navigation', module)
  .add('In page Navigation', createStory(InPageNavigationDefault));
/* ##Story goes here */
