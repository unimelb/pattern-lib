import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import TabsDefault from './TabsDefault.vue';
import TabsFeatured from './TabsFeatured.vue';
import TabsMaterial from './TabsMaterial.vue';
// import TabsNoJs from './TabsNoJs.vue';

storiesOf('Tabs', module)
  .add('Conventional tabs', createStory(TabsDefault, { shallowRender: true }))
  .add('Conventional tabs, featured alternate', createStory(TabsFeatured, { shallowRender: true }))
  .add('Material style tabs', createStory(TabsMaterial, { shallowRender: true }));
// .add('No js', createStory(TabsNoJs, { shallowRender: true }));
