import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import InPageNavigationDefault from './InPageNavigationDefault.vue';
import OutPageNavigationDefault from './OutPageNavigationDefault.vue';

/* ##Import story component here */

storiesOf('Page / Navigation', module)
  .add('In page Navigation', createStory(InPageNavigationDefault))
  .add('Out Page Navigation', createStory(OutPageNavigationDefault));
/* ##Story goes here */
