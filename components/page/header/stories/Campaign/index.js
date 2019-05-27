import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../../.storybook/utils';

import Default from './Default.vue';

storiesOf('Page / Header / Campaign', module)
  .add('Default', createStory(Default));
