import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import FilteredResultsDefault from './FilteredResultsDefault.vue';
import FilteredResultsWithResults from './FilteredResultsWithResults.vue';
/* ##Import story component here */

storiesOf('filters/Filtered Results', module)
  .add('Default', createStory(FilteredResultsDefault))
  .add('With results', createStory(FilteredResultsWithResults));
