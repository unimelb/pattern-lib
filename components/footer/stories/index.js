import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import PageFooterDefault from './PageFooterDefault.vue';
import PageFooter2021 from './PageFooter2021.vue';

storiesOf('Footer', module)
  .add('Default', createStory(PageFooterDefault))
  .add('2021', createStory(PageFooter2021));
