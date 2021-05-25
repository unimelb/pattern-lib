import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Default from './Default.vue';
import DefaultDark from './DefaultDark.vue';
import Study from './Study.vue';
import PageHeaderHome from './PageHeaderHome.vue';

storiesOf('Today/Header', module)
  .add('Default', createStory(Default))
  .add('Default (Dark)', createStory(DefaultDark))
  .add('Study', createStory(Study))
  .add('Page Header Home', createStory(PageHeaderHome));
