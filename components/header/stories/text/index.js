import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Default from './Default.vue';

storiesOf(' Header / Text', module)
  .add('Default', createStory(Default));
