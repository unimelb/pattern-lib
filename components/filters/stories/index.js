import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import FilterBoxDefault from '../components/filter-box/stories/FilterBoxDefault.vue';
import FilterBoxAside from '../components/filter-box/stories/FilterBoxAside.vue';
import FilterDropdownDefault from '../components/filter-dropdown/stories/FilterDropdownDefault.vue';
import FilteredResultsNoResults from '../components/filtered-results/stories/FilteredResultsNoResults.vue';
import FilteredResultsWithResults from '../components/filtered-results/stories/FilteredResultsWithResults.vue';
import MajorsAndSpecialisations from './MajorsAndSpecialisations/StoryWrapper.vue';

storiesOf('filters/components/Filter box', module)
  .add('Default', createStory(FilterBoxDefault))
  .add('Aside', createStory(FilterBoxAside));

storiesOf('filters/components/Filter Dropdown', module)
  .add('Default', createStory(FilterDropdownDefault));

storiesOf('filters/components/Filtered Results', module)
  .add('No results', createStory(FilteredResultsNoResults))
  .add('With results', createStory(FilteredResultsWithResults));

storiesOf('filters/Usage example/Find a course interest pages', module)
  .add('Majors and specialisations tab', createStory(MajorsAndSpecialisations));
