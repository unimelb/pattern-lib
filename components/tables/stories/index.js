import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import TableDefault from './TableDefault.vue';
import TableResponsive from './TableResponsive.vue';
import TableComplex from './TableComplex.vue';
import TableComplexResponsive from './TableComplexResponsive.vue';
import TableCentered from './TableCentered.vue';
import TableTight from './TableTight.vue';
import TableLoose from './TableLoose.vue';
import TableHover from './TableHover.vue';
import TableStatsWrapped from './TableStatsWrapped.vue';

storiesOf('Tables', module)
  .add('Default', createStory(TableDefault))
  .add('Responsive', createStory(TableResponsive))
  .add('Complex', createStory(TableComplex))
  .add('Complex Responsive', createStory(TableComplexResponsive))
  .add('Centered', createStory(TableCentered))
  .add('In small section', createStory(TableStatsWrapped))
  .add('Tight padded', createStory(TableTight))
  .add('Loose padded', createStory(TableLoose))
  .add('Hover', createStory(TableHover));
