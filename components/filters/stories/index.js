import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

// Components stories
import FilterBoxDefault from '../components/filter-box/stories/FilterBoxDefault.vue';
import FilterBoxAside from '../components/filter-box/stories/FilterBoxAside.vue';
import FilterBoxWithMultipleFilters from '../components/filter-box/stories/FilterBoxWithMultipleFilters.vue';
import FilterDropdownDefault from '../components/filter-dropdown/stories/FilterDropdownDefault.vue';
import FilteredResultsNoResults from '../components/filtered-results/stories/FilteredResultsNoResults.vue';
import FilteredResultsWithResults from '../components/filtered-results/stories/FilteredResultsWithResults.vue';
import FilterWidgetDefault from '../components/filter-widget/stories/FilterWidgetDefault.vue';
// BE filtering stories
import MajorsAndSpecialisations from './BackEndFiltering/MajorsAndSpecialisations/StoryWrapper.vue';
import Default from './BackEndFiltering/Default/StoryWrapper.vue';

storiesOf('filters/components/Filter box', module)
  .add('Default', createStory(FilterBoxDefault))
  .add('Aside', createStory(FilterBoxAside))
  .add('Multiple Filters', createStory(FilterBoxWithMultipleFilters));

storiesOf('filters/components/Filter Dropdown', module)
  .add('Default', createStory(FilterDropdownDefault));

storiesOf('filters/components/Filtered Results', module)
  .add('No results', createStory(FilteredResultsNoResults))
  .add('With results', createStory(FilteredResultsWithResults));

storiesOf('filters/components/Filter Widget', module)
  .add('Default', createStory(FilterWidgetDefault));

storiesOf('filters/Usage example/BE side filtering', module)
  .add('Default', createStory(Default))
  .add('Majors and specialisations tab', createStory(MajorsAndSpecialisations));
