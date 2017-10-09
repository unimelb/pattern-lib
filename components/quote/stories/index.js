import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import QuoteDefault from './QuoteDefault.vue';
import QuoteWithBorders from './QuoteWithBorders.vue';
import QuoteNoAuthor from './QuoteNoAuthor.vue';
import QuoteAltBg from './QuoteAltBg.vue';
import QuoteInverted from './QuoteInverted.vue';
import QuoteInvertedWithBorders from './QuoteInvertedWithBorders.vue';
import QuoteRaw from './QuoteRaw.vue';

storiesOf('Quote', module)
  .add('Default', createStory(QuoteDefault))
  .add('With borders', createStory(QuoteWithBorders))
  .add('Without author', createStory(QuoteNoAuthor))
  .add('Light background', createStory(QuoteAltBg))
  .add('Inverted', createStory(QuoteInverted))
  .add('Inverted with borders', createStory(QuoteInvertedWithBorders))
  .add('Raw (no classes)', createStory(QuoteRaw));
