import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import CardArticle from './CardArticle.vue';
import CardArticleLarge from './CardArticleLarge.vue';
import CardArticleList from './CardArticleList.vue';

storiesOf('Today/Cards', module)
  .add('Article', createStory(CardArticle))
  .add('Article Large', createStory(CardArticleLarge))
  .add('Article List', createStory(CardArticleList));
