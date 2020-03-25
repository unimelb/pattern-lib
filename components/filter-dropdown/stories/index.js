import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import FilterDropdownDefault from './FilterDropdownDefault.vue';
/* ##Import story component here */

storiesOf('Filter Dropdown', module)
  .add('Default', createStory(FilterDropdownDefault));
