import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import FilterResultsDefault from './FilterResultsDefault.vue';
import FilterResultsWithResults from './FilterResultsWithResults.vue';
/* ##Import story component here */

storiesOf('Filter Results', module)
  .add('Default', createStory(FilterResultsDefault))
  .add('With results', createStory(FilterResultsWithResults));
