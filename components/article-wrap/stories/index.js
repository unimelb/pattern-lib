import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import ArticleWrapDefault from './ArticleWrapDefault.vue';
import ArticleWrapNoSidebar from './ArticleWrapNoSidebar.vue';

storiesOf('Article', module)
  .add('Default', createStory(ArticleWrapDefault))
  .add('No sidebar', createStory(ArticleWrapNoSidebar));
