import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import BaseCheckboxDefault from './BaseCheckboxDefault.vue';
/* ##Import story component here */

storiesOf('base/Base Checkbox', module)
  .add('Default', createStory(BaseCheckboxDefault));
