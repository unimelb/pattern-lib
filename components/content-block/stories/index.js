import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import ContentBlockDefault from './ContentBlockDefault.vue';
import ContentBlockSmall from './ContentBlockSmall.vue';
import ContentBlockLargeInverted from './ContentBlockLargeInverted.vue';
import ContentBlockShortAlt from './ContentBlockShortAlt.vue';
import ContentBlockNews from './ContentBlockNews.vue';
import ContentBlockEvent from './ContentBlockEvent.vue';
import ContentBlockNewsEvents from './ContentBlockNewsEvents.vue';
import ContentBlockNewsTags from './ContentBlockNewsTags.vue';

storiesOf('Content Block', module)
  .add('Default (medium)', createStory(ContentBlockDefault))
  .add('Small', createStory(ContentBlockSmall))
  .add('Large + inverted', createStory(ContentBlockLargeInverted))
  .add('Short + light', createStory(ContentBlockShortAlt))
  .add('News block', createStory(ContentBlockNews))
  .add('Event block', createStory(ContentBlockEvent))
  .add('Combination News & Events', createStory(ContentBlockNewsEvents))
  .add('News block with tags', createStory(ContentBlockNewsTags));
