import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import TabsDefault from './TabsDefault.vue';
import TabsAlt from './TabsAlt.vue';

storiesOf('Tabs', module)
  .add('Tabs', createStory(TabsDefault))
  .add('Tabs - Alternate', createStory(TabsAlt));
