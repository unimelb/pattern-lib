import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import PageFooterDefault from './PageFooterDefault.vue';

storiesOf('Footer', module)
  .add('Default', createStory(PageFooterDefault));
