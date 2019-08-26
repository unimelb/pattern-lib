import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import ArticleWrapDefault from './ArticleWrapDefault.vue';
import ArticleWrapColumnLayout from './ArticleWrapColumnLayout.vue';
import ArticleWrapNoMetadata from './ArticleWrapNoMetadata.vue';
import ArticleCategories from './ArticleCategories.vue';
import Tags from './Tags.vue';
import ArticleCategoriesTags from './ArticleCategoriesTags.vue';

storiesOf('Article', module)
  .add('Default', createStory(ArticleWrapDefault))
  .add('Column layout', createStory(ArticleWrapColumnLayout))
  .add('No metadata', createStory(ArticleWrapNoMetadata))
  .add('News article with categories', createStory(ArticleCategories))
  .add('Tags', createStory(Tags))
  .add('News article with categories and tags', createStory(ArticleCategoriesTags));
