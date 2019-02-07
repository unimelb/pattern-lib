import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import InPageNavigationDefault from './InPageNavigationDefault.vue';
/* ##Import story component here */

storiesOf('In Page Navigation', module)
  .add('Default', createStory(InPageNavigationDefault))
  /* ##Story goes here */
;
