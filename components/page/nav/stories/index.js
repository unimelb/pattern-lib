import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import PageNavDefault from './PageNavDefault.vue';
import PageNavNested from './PageNavNested.vue';
import PageSearchDefault from './PageSearchDefault.vue';
import SearchIntegratedNav from './SearchIntegratedNav.vue';

storiesOf('Page / Header tools', module)
  .add('Default', createStory(PageNavDefault))
  .add('Search only', createStory(PageSearchDefault))
  .add('Nested site nav', createStory(PageNavNested))
  .add('Search integrated', createStory(SearchIntegratedNav));
