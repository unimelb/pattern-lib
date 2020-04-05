import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import SegmentationNoticeDefaultFiltersApplied from './SegmentationNoticeDefaultFiltersApplied.vue';
import SegmentationNoticeCustomFiltersApplied from './SegmentationNoticeCustomFiltersApplied.vue';

storiesOf('filters/Filter Dropdown', module)
  .add('Default filters applied', createStory(SegmentationNoticeDefaultFiltersApplied))
  .add('Custom filters applied', createStory(SegmentationNoticeCustomFiltersApplied));
