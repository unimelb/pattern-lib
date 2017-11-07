import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import TabsDefault from './TabsDefault.vue';
import TabsFeatured from './TabsFeatured.vue';
import TabsMaterial from './TabsMaterial.vue';
// import TabsNoJs from './TabsNoJs.vue';

storiesOf('Tabs', module)
  .add('Conventional tabs', createStory(TabsDefault))
  .add('Conventional tabs, featured alternate', createStory(TabsFeatured))
  .add('Material style tabs', createStory(TabsMaterial));
// .add('No js', createStory(TabsNoJs));
