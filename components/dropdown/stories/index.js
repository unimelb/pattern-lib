import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from 'storybook/utils';

import DropdownDefault from './DropdownDefault.vue';
import DropdownChange from './DropdownChange.vue';

/* ##Import story component here */

storiesOf('Dropdown', module)
  .add('Default', createStory(DropdownDefault))
  .add('Change Data', createStory(DropdownChange));
