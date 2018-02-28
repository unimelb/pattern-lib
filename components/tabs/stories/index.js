import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import TabsDefault from './TabsDefault.vue';
import TabsAlt from './TabsAlt.vue';
import TabsStory from './TabsStory.vue';

storiesOf('Tabs', module)
  .add('Tabs', createStory(TabsDefault))
  .add('Tabs - Alternate', createStory(TabsAlt));
  .add('Tabs test', createStory(TabsStory))
