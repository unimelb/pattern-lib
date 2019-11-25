import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import TabsDefault from './TabsDefault.vue';
import TabsAlt from './TabsAlt.vue';
import TabsAltMin from './TabsAltMin.vue';
import SameTab from './SameTab.vue';
import TabsSection from './TabsSection.vue';
import TabsSelect from './TabsSelect.vue';

storiesOf('Tabs', module)
  .add('Tabs, isolated', createStory(TabsDefault))
  .add('Tabs, in context', createStory(TabsSection))
  .add('Tabs (alt)', createStory(TabsAlt))
  .add('Tabs (alt, no mobile navigation)', createStory(TabsAltMin))
  .add('Tabs, same text', createStory(SameTab))
  .add('Tabs, using a select', createStory(TabsSelect));
