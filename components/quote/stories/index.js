import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import QuoteDefault from './QuoteDefault.vue';
import QuoteInverted from './QuoteInverted.vue';
import QuoteDefaultBorders from './QuoteDefaultBorders.vue';
import QuoteInvertedBorders from './QuoteInvertedBorders.vue';

storiesOf('Quote', module)
  .add('Default', createStory(QuoteDefault))
  .add('Default - with borders', createStory(QuoteDefaultBorders))
  .add('Inverted', createStory(QuoteInverted))
  .add('Inverted - with borders', createStory(QuoteInvertedBorders));
