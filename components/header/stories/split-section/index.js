import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import Default from './Default.vue';

storiesOf('Header/Split Section', module)
  .add('Default', createStory(Default));
