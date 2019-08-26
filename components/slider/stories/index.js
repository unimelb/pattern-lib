import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Default from './Default.vue';

/* Section - Focus  */
storiesOf('Slider', module)
  .add('Default', createStory(Default));
