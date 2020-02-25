import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import AppCheckboxDefault from './AppCheckboxDefault.vue';
/* ##Import story component here */

storiesOf('App Checkbox', module)
  .add('Default', createStory(AppCheckboxDefault));
