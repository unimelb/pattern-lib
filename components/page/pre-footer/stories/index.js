import { storiesOf } from '@storybook/vue';

import { createStory } from '../../../../.storybook/utils';

import PagePreFooterDefault from './PagePreFooterDefault.vue';

storiesOf('Page / Pre-footer', module)
  .add('Default', createStory(PagePreFooterDefault));
