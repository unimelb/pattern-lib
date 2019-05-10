import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../../.storybook/utils';

import InPageNavigationDefault from './InPageNavigationDefault.vue';
import InPageNavigationInverted from './InPageNavigationInverted.vue';
import OutPageNavigationDefault from './OutPageNavigationDefault.vue';
import NavigationCollapsedDefault from './NavigationCollapsedDefault.vue';


/* ##Import story component here */

storiesOf('Page / Navigation', module)
  .add('In page Navigation', createStory(InPageNavigationDefault))
  .add('In page Navigation - Inverted', createStory(InPageNavigationInverted))
  .add('Navigation Collapsed', createStory(NavigationCollapsedDefault))
  .add('Out Page Navigation', createStory(OutPageNavigationDefault));
/* ##Story goes here */
