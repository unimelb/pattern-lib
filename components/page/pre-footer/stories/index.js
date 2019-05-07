import { storiesOf } from '@storybook/vue';

import { createStory } from '../../../../.storybook/utils';

import PagePreFooterDefault from './PagePreFooterDefault.vue';
import PagePreFooterDark from './PagePreFooterDark.vue';
import PagePreFooterLight from './PagePreFooterLight.vue';

storiesOf('Page / Pre-footer', module)
  .add('Default', createStory(PagePreFooterDefault))
  .add('Dark', createStory(PagePreFooterDark))
  .add('Light', createStory(PagePreFooterLight));
