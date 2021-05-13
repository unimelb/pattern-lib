import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Default from './Default.vue';
import DefaultWithSubText from './DefaultWithSubText.vue';
import Large from './Large.vue';
import LargeWithLinks from './LargeWithLinks.vue';
import Event from './Event.vue';

storiesOf('Today/Campaign', module)
  .add('Default', createStory(Default))
  .add('Default (with sub text)', createStory(DefaultWithSubText))
  .add('Large', createStory(Large))
  .add('Large (with links)', createStory(LargeWithLinks))
  .add('Event', createStory(Event));
