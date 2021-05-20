import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Default from './Default.vue';
import Large from './Large.vue';
import LargeWithLinks from './LargeWithLinks.vue';
import Event from './Event.vue';

storiesOf('Today/Campaign', module)
  .add('Default', createStory(Default))
  .add('Large', createStory(Large))
  .add('Large (with links)', createStory(LargeWithLinks))
  .add('Event', createStory(Event));
