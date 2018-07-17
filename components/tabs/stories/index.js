import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import TabsDefault from './TabsDefault.vue';

storiesOf('Tabs', module)
  .add('Tabs', createStory(TabsDefault));
