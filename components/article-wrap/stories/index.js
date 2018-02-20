import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import ArticleWrapDefault from './ArticleWrapDefault.vue';
import ArticleWrapColumnLayout from './ArticleWrapColumnLayout.vue';
import ArticleWrapNoMetadata from './ArticleWrapNoMetadata.vue';
import ArticleWrapCategories from './ArticleWrapCategories.vue';

storiesOf('Article', module)
  .add('Default', createStory(ArticleWrapDefault))
  .add('Column layout', createStory(ArticleWrapColumnLayout))
  .add('No metadata', createStory(ArticleWrapNoMetadata))
  .add('News article with tags', createStory(ArticleWrapCategories));
