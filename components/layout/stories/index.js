import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import LayoutDefault from './LayoutDefault.vue';

storiesOf(' Layout', module)
  .add('Layout', createStory(LayoutDefault));
