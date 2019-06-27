import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import PageNavDefault from './PageNavDefault.vue';
import PageNavNested from './PageNavNested.vue';
import PageSearchDefault from './PageSearchDefault.vue';

storiesOf('Header tools', module)
  .add('Default', createStory(PageNavDefault))
  .add('Search only', createStory(PageSearchDefault))
  .add('Nested site nav', createStory(PageNavNested));
