import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import TabsDefault from './TabsDefault.vue';
import TabsAlt from './TabsAlt.vue';
import TabsAltMin from './TabsAltMin.vue';

storiesOf('Tabs', module)
  .add('Tabs', createStory(TabsDefault))
  .add('Tabs (alt)', createStory(TabsAlt))
  .add('Tabs (alt, no mobile navigation)', createStory(TabsAltMin));
