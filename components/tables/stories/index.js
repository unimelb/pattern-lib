import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import TableDefault from './TableDefault.vue';
import TableStats from './TableStats.vue';
import TableStatsWrapped from './TableStatsWrapped.vue';

storiesOf('Tables', module)
  .add('Default', createStory(TableDefault))
  .add('Stats', createStory(TableStats))
  .add('Stats, limit width', createStory(TableStatsWrapped));
