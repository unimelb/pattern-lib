import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import CardFlat from './CardFlat.vue';
import CardFlatList from './CardFlatList.vue';
import CardArticle from './CardArticle.vue';
import CardArticleLarge from './CardArticleLarge.vue';
import CardArticleList from './CardArticleList.vue';

storiesOf('Today/Cards', module)
  .add('Flat', createStory(CardFlat))
  .add('Flat List', createStory(CardFlatList))
  .add('Article', createStory(CardArticle))
  .add('Article Large', createStory(CardArticleLarge))
  .add('Article List', createStory(CardArticleList));
