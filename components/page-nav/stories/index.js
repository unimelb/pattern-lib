import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import PageNavDefault from './PageNavDefault.vue';
import PageNavNested from './PageNavNested.vue';

storiesOf('Page/Top Nav', module)
  .add('Default', createStory(PageNavDefault, { shallowRender: true }))
  .add('Nested site nav', createStory(PageNavNested, { shallowRender: true }));
