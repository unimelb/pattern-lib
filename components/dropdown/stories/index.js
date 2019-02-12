import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import DropdownDefault from './DropdownDefault.vue';
/* ##Import story component here */

storiesOf('Dropdown', module)
  .add('Default', createStory(DropdownDefault));
