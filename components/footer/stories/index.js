import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import PageFooterDefault from './PageFooterDefault.vue';
import PageFooterToday from './PageFooterToday.vue';

storiesOf('Footer', module)
  .add('Default', createStory(PageFooterDefault))
  .add('Today', createStory(PageFooterToday));
