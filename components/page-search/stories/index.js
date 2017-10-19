import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import PageSearchDefault from './PageSearchDefault.vue';

storiesOf('Page/Search', module)
  .add('Search only', createStory(PageSearchDefault, { shallowRender: true }));
