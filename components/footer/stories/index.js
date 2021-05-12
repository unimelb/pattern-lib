import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import PageFooterDefault from './PageFooterDefault.vue';
import PageFooterAlt from './PageFooterAlt.vue';

storiesOf('Footer', module)
  .add('Default', createStory(PageFooterDefault))
  .add('Alt', createStory(PageFooterAlt));
