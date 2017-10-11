import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import ContentBlockDefault from './ContentBlockDefault.vue';
import ContentBlockSmall from './ContentBlockSmall.vue';
import ContentBlockLargeInverted from './ContentBlockLargeInverted.vue';
import ContentBlockShortAlt from './ContentBlockShortAlt.vue';

storiesOf('Content Block', module)
  .add('Default (medium)', createStory(ContentBlockDefault))
  .add('Small', createStory(ContentBlockSmall))
  .add('Large + inverted', createStory(ContentBlockLargeInverted))
  .add('Short + light', createStory(ContentBlockShortAlt));
