import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import FilterBoxDefault from './FilterBoxDefault.vue';
import FilterBoxAside from './FilterBoxAside.vue';

storiesOf('filters/Filter box', module)
  .add('Default', createStory(FilterBoxDefault))
  .add('Aside', createStory(FilterBoxAside));
