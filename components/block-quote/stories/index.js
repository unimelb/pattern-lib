import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import BlockQuoteDefault from './BlockQuoteDefault.vue';
import BlockQuoteWithBorders from './BlockQuoteWithBorders.vue';
import BlockQuoteNoAuthor from './BlockQuoteNoAuthor.vue';
import BlockQuoteAltBg from './BlockQuoteAltBg.vue';
import BlockQuoteInverted from './BlockQuoteInverted.vue';
import BlockQuoteInvertedWithBorders from './BlockQuoteInvertedWithBorders.vue';
import BlockQuoteRaw from './BlockQuoteRaw.vue';

storiesOf('Block Quote', module)
  .add('Default', createStory(BlockQuoteDefault))
  .add('With borders', createStory(BlockQuoteWithBorders))
  .add('Without author', createStory(BlockQuoteNoAuthor))
  .add('Light background', createStory(BlockQuoteAltBg))
  .add('Inverted', createStory(BlockQuoteInverted))
  .add('Inverted with borders', createStory(BlockQuoteInvertedWithBorders))
  .add('Raw (no classes)', createStory(BlockQuoteRaw));
