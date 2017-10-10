import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import ContentBlockDefault from './ContentBlockDefault.vue';
import ContentBlockSmall from './ContentBlockSmall.vue';

storiesOf('Content block', module)
  .add('Default', createStory(ContentBlockDefault))
  .add('Small', createStory(ContentBlockSmall));
