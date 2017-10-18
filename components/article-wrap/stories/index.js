import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';
import { MainDecorator } from '.storybook/decorators';

import ArticleWrapDefault from './ArticleWrapDefault.vue';
import ArticleWrapNoSidebar from './ArticleWrapNoSidebar.vue';

storiesOf('Article', module)
  .addDecorator(MainDecorator)
  .add('Default', createStory(ArticleWrapDefault))
  .add('No sidebar', createStory(ArticleWrapNoSidebar));
