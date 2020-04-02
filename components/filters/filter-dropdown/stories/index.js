import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import FilterDropdownDefault from './FilterDropdownDefault.vue';
/* ##Import story component here */

storiesOf('filters/Filter Dropdown', module)
  .add('Default', createStory(FilterDropdownDefault));
