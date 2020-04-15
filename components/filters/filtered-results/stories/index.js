import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import FilteredResultsNoResults from './FilteredResultsNoResults.vue';
import FilteredResultsWithResults from './FilteredResultsWithResults.vue';
/* ##Import story component here */

storiesOf('filters/Filtered Results', module)
  .add('No results', createStory(FilteredResultsNoResults))
  .add('With results', createStory(FilteredResultsWithResults));
