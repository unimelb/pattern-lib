import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import DropdownDefault from './DropdownDefault.vue';
import DropdownVmodel from './DropdownVmodel.vue';

/* ##Import story component here */

storiesOf('Dropdown', module)
  .add('Default', createStory(DropdownDefault))
  .add('Vmodel', createStory(DropdownVmodel));
