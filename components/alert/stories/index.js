import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import AlertDefault from './AlertDefault.vue';
import AlertWarning from './AlertWarning.vue';
import AlertSuccess from './AlertSuccess.vue';
import AlertDanger from './AlertDanger.vue';
/* ##Import story component here */

storiesOf('Alert', module)
  .add('Default', createStory(AlertDefault))
  .add('Warning', createStory(AlertWarning))
  .add('Success', createStory(AlertSuccess))
  .add('Danger', createStory(AlertDanger));
/* ##Story goes here */
