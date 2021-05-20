import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import CardFlat from './CardFlat.vue';
import CardFlatList from './CardFlatList.vue';

storiesOf('Today/Cards', module)
  .add('Flat', createStory(CardFlat))
  .add('Flat List', createStory(CardFlatList));
